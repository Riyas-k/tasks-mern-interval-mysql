import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();
import {
  deleteTaskId,
  getAllTasks,
  getTaskById,
  updateTaskEdit,
  uploadData,
} from "../helpers/taskHelpers.js";

AWS.config.update({ region: "us-east-1" });

//configure aws s3
let s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESKEY,
  secretAccessKey: process.env.AWS_SECRET,
});

export const listTasks = async (req, res) => {
  try {
    const data = await getAllTasks();
    if (data) res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const addTask = async (req, res) => {
  try {
    const { name, data, mimetype } = req.files.image;
    const { heading, description, date, time } = req.body;
    const uploadParams = {
      Bucket: "sampleupload",
      Key: name,
      Body: Buffer.from(data),
      ContentType: mimetype,
      ACL: "public-read",
    };
    await new Promise(async (resolve, reject) => {
      try {
        s3.upload(uploadParams, async (err, data) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            const response = await uploadData(
              heading,
              description,
              date,
              time,
              data.Location
            );
            if (response) {
              res.status(200).json({ status: true });
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export const editTask = async (req, res) => {
  try {
    const { id } = req.body;
    const existingTask = await getTaskById(id);
    if (!existingTask) res.status(404).json({ error: "Task not found" });
    let imageUrl = existingTask.dataValues.Image;
    const { name, data, mimetype } = req.files.image;
    if (name && data) {
      const uploadParams = {
        Bucket: "sampleupload",
        Key: name,
        Body: Buffer.from(data),
        ContentType: mimetype,
        ACL: "public-read",
      };
      await new Promise((resolve, reject) => {
        try {
          s3.upload(uploadParams, (err, data) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              imageUrl = data.Location;
              resolve();
            }
          });
        } catch (error) {
          console.log(error);
        }
      });
    }
    const { heading, description, date, time } = req.body;
    const updateTask = await updateTaskEdit(
      id,
      heading,
      description,
      date,
      time,
      imageUrl
    );
    if (updateTask == 1) {
      res.status(200).json(true);
    } else {
      res.status(500).json({ error: "Not updated" });
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteTaskId(id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).json(data);
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTask = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const task = await getTaskById(id);
    if (!task) res.status(404).json({ error: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
};

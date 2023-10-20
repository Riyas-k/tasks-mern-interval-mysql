import Task from "../models/Task.js";

export const uploadData = (heading, description, date, time, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      const taskData = {
        Heading: heading,
        Description: description,
        Date: date,
        Time: time,
        Image: image,
      };
      const newTask = await Task.create(taskData);
      resolve(newTask);
    } catch (error) {
      console.log(error);
    }
  });
};
export const getAllTasks = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Task.findAll();
      if (data) resolve(data);
    } catch (error) {
      console.log(error);
    }
  });
};
export const getTaskById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Task.findByPk(id);
      if (data) {
        resolve(data);
      } else {
        reject("Task not found");
      }
    } catch (error) {
      console.log(error);
    }
  });
};
export const updateTaskEdit = (
  id,
  heading,
  description,
  date,
  time,
  imageUrl
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [rowsUpdated, updatedTask] = await Task.update(
        {
          Heading: heading,
          Description: description,
          Date: date,
          Time: time,
          Image: imageUrl,
        },
        {
          where: { id },
          returning: true,
        }
      );
      if (rowsUpdated == 0) {
        reject("Task not found");
      } else {
        resolve(updatedTask);
      }
    } catch (error) {
      console.log(error);
    }
  });
};
export const deleteTaskId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deleted = await Task.destroy({
        where: { id },
      });
      if (deleted == 1) {
        resolve(true);
      } else {
        reject(false);
      }
    } catch (error) {
      console.log(error);
    }
  });
};

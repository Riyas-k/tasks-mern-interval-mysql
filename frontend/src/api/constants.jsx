import axios from "../axios/connection";

export const getAllTasks = async () => {
  try {
    const data = await axios.get("/");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleTask = async (id) => {
  try {
    const data = await axios.get(`/task/${id.taskId}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const postTask = async (heading, description, date, time, image) => {
  try {
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("image", image); // Add the image to the FormData

    const data = await axios.post("/add-task", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data.status;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = async (id) => {
  try {
    const data = await axios.delete(`/delete-task/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateTask = async (
  id,
  heading,
  description,
  date,
  time,
  image
) => {
  try {
    const formData = new FormData();
    formData.append("id", id.taskId);
    formData.append("heading", heading);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("image", image); // Add the image to the FormData
    const data = await axios.post("/edit-task", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

import React, { useState, useEffect } from "react";
import { getSingleTask, updateTask } from "../api/constants";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const id = useParams();
  const [task, setTask] = useState({});
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate("");

  const fetchData = async () => {
    try {
      const data = await getSingleTask(id);
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Conditionally set initial state values based on the task object
  useEffect(() => {
    if (task) {
      setHeading(task.Heading || ""); // Use the task property or empty string as the default
      setDescription(task.Description || "");
      setDate(task.Date || "");
      setTime(task.Time || "");
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await updateTask(id, heading, description, date, time, image);
    if (data) {
      alert("Task Updated Successfully");
      navigate("/");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-md rounded-lg"
      encType="multipart/form-data"
    >
      <input
        type="text"
        placeholder="Task Heading"
        className="w-full p-2 rounded-md border"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="w-full p-2 mt-2 rounded-md border"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        className="w-full p-2 mt-2 rounded-md border"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="Time"
        className="w-full p-2 mt-2 rounded-md border"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        placeholder="Task Image"
        className="w-full p-2 mt-2 rounded-md border"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button
        type="submit"
        className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md"
      >
        Update Task
      </button>
    </form>
  );
};

export default EditTask;

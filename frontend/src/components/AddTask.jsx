import React, { useState } from "react";
import { postTask } from "../api/constants";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(heading, description, date, time, image);
    const data = await postTask(heading, description, date, time, image);
    if (data) {
      alert("Task Added Successfully");
      setHeading("");
      setDescription("");
      setDate("");
      setTime("");
      setImage("");
      navigate("/");
    } else {
      alert("Something went wrong pls try again");
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
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

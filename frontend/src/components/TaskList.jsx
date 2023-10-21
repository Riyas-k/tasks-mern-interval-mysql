import React, { useEffect, useState } from "react";
import { deleteTask, getAllTasks } from "../api/constants";
import { Link, useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const fetchTasks = async () => {
    try {
      const data = await getAllTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const data = await deleteTask(id);
      if (data) {
        fetchTasks();
        alert("Deleted Successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-4 shadow-md rounded-lg">
          <Link to={`/task/${task.id}`} className="block">
            <img
              src={task.Image}
              alt={task.Heading}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-semibold">{task.Heading}</h2>
            <p className="text-gray-500">{task.Description}</p>
            <p className="text-gray-500">
              Date: {new Date(task.Date).toLocaleTimeString("en-IN")}
            </p>
            <p className="text-gray-500">Time: {task.Time}</p>
          </Link>
          <div className="flex justify-between mt-2">
            <button
              onClick={() => navigate(`/edit-task/${task.id}`)} // Implement handleEdit function
              className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-800"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)} // Implement handleDelete function
              className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteTask, getSingleTask } from "../api/constants";

const TaskDetail = () => {
  const [task, setTasks] = useState([]);
  const id = useParams();
  const fetchData = async () => {
    try {
      console.log(id, "g");
      const data = await getSingleTask(id);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      const data = await deleteTask(id);
      if (data) {
        alert("Deleted Successfully");
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div key={task.id} className="bg-white p-4 shadow-md rounded-lg">
        <Link to={`/tasks/${task.id}`} className="block">
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
    </div>
  );
};

export default TaskDetail;

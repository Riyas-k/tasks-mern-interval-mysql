import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Task = sequelize.define("Task", {
  Heading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
  },
});

export default Task;

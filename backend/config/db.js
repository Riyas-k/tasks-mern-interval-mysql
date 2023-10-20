import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "sammy",
  password: "your_password_here",
  database: "tasks",
});


export { sequelize }; 
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import taskRouter from "./routes/tasks.js";
import fileUpload from "express-fileupload";

const app = express();
const PORT = process.env.PORT || 3001;

//setup app
app.use(cors());
app.use(express.json());
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));

app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

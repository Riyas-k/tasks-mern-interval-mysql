import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import TaskDetail from "./components/TaskDetail";
import Error from "./404";
import TaskForm from "./components/AddTask";
import EditTask from "./components/EditTask";
// import TaskDetails from './components/TaskDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/edit-task/:taskId" element={<EditTask />} />
          <Route path="*" element={<Error />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;

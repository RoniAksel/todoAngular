const express = require("express");
const cors = require("cors");
const Tasks = require("./tasks-db")

const PORT = 8000;

const app = express();
app.use(express.json());
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
app.use(
    //enable cross-origin requests
    cors({
      origin: "http://localhost:4200",
      credentials: true
    })
  );

// Routing

app.get("/api/tasks", Tasks.getAllTasks); //Get All Tasks
app.get("/api/tasks/:id", Tasks.getTaskById); //get specific task
app.post("/api/tasks/", Tasks.addNewTask); //post new task
app.delete("/api/tasks/:id", Tasks.deleteTask); //delete a task


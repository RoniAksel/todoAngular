const fetch = require("node-fetch");

let url = 'https://jsonplaceholder.typicode.com';

// Initializing the data from JSON PlaceHolder 

const tasksArray = []; //empty Array to begin with 

function fetchTasks() { //function which fetches the tasks and sends them to the array
    fetch(`${url}/posts`)
        .then(response => response.json())
        .then(tasks => {
            try {
                tasks.slice(0, 5).map((task) => {
                    tasksArray.push(task)
                })
            }
            catch {
                res.send("Error Has Occurred")
            }
        })
        .catch(error => {
            console.log('There has been a problem: ', error.message);
        })
}

fetchTasks()


// Getting All Tasks

module.exports.getAllTasks = (req, res) => {
    res.json(tasksArray)
}

// Getting a specif task

module.exports.getTaskById = (req, res) => {
    let reqId = parseInt(req.params.id);
    let task = tasksArray.find((t) => t.id === reqId)
    try {
        if (task) {
            res.json(task)
        }
    } catch {
        res.json("Error Has Occurred")
    }
}

// Add a new Task 

module.exports.addNewTask = (req, res) => {
    let newId = Math.floor((Math.random() * 101010101 /1112313 * 93939393) + 1);
    let newTask = {
        id: newId,
        title: req.body.title,
        body: req.body.body
    };
    try {
        tasksArray.push(newTask);
        res.status(201).json(newTask)
    } catch {
        res.json("Error Has Occurred")
    }
}

// Delete a specific task 

module.exports.deleteTask = (req, res) => {
    let reqId = parseInt(req.params.id);
    let task = tasksArray.find((t) => t.id === reqId)

    try {
        if (task) {
            let idx = tasksArray.indexOf(task);
            tasksArray.splice(idx, 1);
            res.json(task)
        } else {
            res.
                status(401)
                .send(`no task was found`)
        }
    } catch {
        res.json("Error Has Occurred")
    }
}



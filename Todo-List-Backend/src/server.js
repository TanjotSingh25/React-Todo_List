import express from "express";
import { db, connectToDB } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/todolist/:status", async (req, res) => {
    const { status } = req.params;

    if (status === "All") {
        const tasks = await db.collection("Tasks").find({}).toArray();
        res.json(tasks);
    } else {
        const tasks = await db.collection("Tasks").find({ status }).toArray();
        res.json(tasks);
    }
});

app.post("/api/todolist/addtask", async (req, res) => {
    const taskObj = req.body;
    if (
        !("task" in taskObj && "status" in taskObj) ||
        !(taskObj.status === "Complete" || taskObj.status === "Incomplete")
    ) {
        res.send("Request body not formatted properly!");
    } else {
        const Tasks = await db.collection("Tasks").find({}).toArray();
        let found = Tasks.some(
            (obj) => obj.task === taskObj.task && obj.status === taskObj.status
        );
        if (!found) {
            await db.collection("Tasks").insertOne(taskObj);
            res.status(200);
            res.send("Task inserted successfully");
        } else {
            res.status(409);
            res.send("Task already exists");
        }
    }
});

app.put("/api/todolist/update", async (req, res) => {
    const { oldTask, newTask, newStatus } = req.body;

    const newTaskObj = {
        $set: {
            task: newTask,
            status: newStatus,
        },
    };

    await db.collection("Tasks").updateOne({ task: oldTask }, newTaskObj);

    res.status(200);
    res.send("Task updated successfully");
});

app.delete("/api/todolist/delete/:task", async (req, res) => {
    const { task } = req.params;
    await db.collection("Tasks").deleteOne({ task: task });

    res.status(200);
    res.send("Task deleted successfully");
});

connectToDB(() => {
    console.log("Connected to Database successfully");
    app.listen(8000, () => {
        console.log("Server Listening at port 8000");
    });
});

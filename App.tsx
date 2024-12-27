import React, { useState } from "react";
import TaskList from "./TaskList";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const addTask = () => {
    if (taskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: taskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle("");
    }
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>React Task Tracker</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  input: {
    width: "70%",
    padding: "10px",
    fontSize: "1rem",
  },
  addButton: {
    padding: "10px 20px",
    marginLeft: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default App;

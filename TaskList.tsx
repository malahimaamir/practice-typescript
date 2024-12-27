import React from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleComplete,
  deleteTask,
}) => {
  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            ...styles.task,
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <span onClick={() => toggleComplete(task.id)} style={styles.text}>
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: "0",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  text: {
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#FF0000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default TaskList;

import Task from "./Task";
import { useEffect, useState } from "react";
import classes from "./TaskList.module.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://learningtracker-a8476-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedTasks = [];

      for (const key in responseData) {
        loadedTasks.push({
          id: key,
          topic: responseData[key].topic,
          description: responseData[key].description,
          difficulty: responseData[key].difficulty,
          date: responseData[key].date,
          timeEstimate: responseData[key].timeEstimate,
          url: responseData[key].resources,
        });
      }

      setTasks(loadedTasks);
      setIsLoading(false);
    };

    fetchTasks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.TasksLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.TasksError}>
        <p>{httpError}!</p>
      </section>
    );
  }

  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      topic={task.topic}
      description={task.description}
      difficulty={task.difficulty}
      date={task.date}
      timeEstimate={task.timeEstimate}
      url={task.url}
      resources={"Read article"}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;

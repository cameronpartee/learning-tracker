import classes from "./Task.module.css";

export const Task = (props) => {
  const diffLevel = props.difficulty.toLowerCase();
  const isHeader = props.topic === "Topic";
  const topic = `${classes["medium-row"]} ${isHeader ? "" : classes.topic}`;
  const diff = `${classes["medium-row"]} ${classes.diff} ${classes[diffLevel]}`;

  return (
    <div className={classes.task}>
      <div className={topic}>{props.topic}</div>
      <div className={classes["large-row"]}>{props.description}</div>
      <div className={diff}>{props.difficulty}</div>
      <div className={classes["small-row"]}>{props.date}</div>
      <div className={classes["medium-row"]}>{props.timeEstimate}</div>
      <div className={classes["medium-row"]}>
        <a href={props.url}>{props.resources}</a>
      </div>
    </div>
  );
};

export default Task;

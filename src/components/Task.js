import classes from "./Task.module.css";

export const Task = () => {
  return (
    <div className={classes.task}>
      <div className={classes.row}>npm vs npx</div>
      <div className={classes["special-row"]}>
        When should you use npm vs npx
      </div>
      <div className={classes.row}>Easy</div>
      <div className={classes.row}>9/13/21</div>
      <div className={classes.row}>30 mins</div>
      <div className={classes.row}>
        <a href="https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm">
          Read article
        </a>
      </div>
    </div>
  );
};

export default Task;

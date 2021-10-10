import classes from "./Header.module.css";
import Task from "../Task/Task";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Task
        topic={"Topic"}
        description={"Description"}
        difficulty={"Difficulty"}
        date={"Date"}
        timeEstimate={"Time Estimate"}
        resources={"Resources"}
      />
    </div>
  );
};

export default Header;

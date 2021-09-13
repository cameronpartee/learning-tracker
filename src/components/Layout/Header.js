import classes from "./Header.module.css";
import Task from "../Task/Task";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Task
        topic={"Topic"}
        des={"Description"}
        diff={"Difficulty"}
        date={"Date"}
        time={"Time Estimate"}
        res={"Resources"}
      />
    </div>
  );
};

export default Header;

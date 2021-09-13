import classes from "./Header.module.css";

export const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.row}>Topic</div>
      <div className={classes["special-row"]}>Description</div>
      <div className={classes.row}>Difficulty</div>
      <div className={classes.row}>Date</div>
      <div className={classes.row}>Time Estimate</div>
      <div className={classes.row}>Resources</div>
    </div>
  );
};

export default Header;

import classes from "./Task.module.css";
import styled from "styled-components";

export const Task = (props) => {
  const diffLevel = props.difficulty.toLowerCase();
  const isHeader = props.topic === "Topic";

  const diff = `${classes[diffLevel]}`;
  const topic = `${isHeader ? "" : classes.topic}`;

  return (
    <Container>
      <RowTopic className={topic}>{props.topic}</RowTopic>
      <RowDescription>{props.description}</RowDescription>
      <RowDifficulty className={diff}>{props.difficulty}</RowDifficulty>
      <RowDate>{props.date}</RowDate>
      <RowTimeEstimate>{props.timeEstimate}</RowTimeEstimate>
      <RowResources>
        <a href={props.url}>{props.resources}</a>
      </RowResources>
    </Container>
  );
};

export default Task;

const Container = styled.div`
  font-size: 1.1rem;
  height: 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const RowTopic = styled.div`
  border-radius: 50px;
  width: 10%;
  margin-left: 5px;
`;

const RowDescription = styled.div`
  width: 30%;
`;

const RowDifficulty = styled.div`
  width: 10%;
  border-radius: 50px;
`;

const RowDate = styled.div`
  width: 10%;
`;

const RowTimeEstimate = styled.div`
  width: 10%;
`;

const RowResources = styled.div`
  width: 10%;
`;

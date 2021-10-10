import styled from "styled-components";
import Task from "./Task";

export const TaskListHeader = () => {
  return (
    <Container>
      <Task
        topic={"Topic"}
        description={"Description"}
        difficulty={"Difficulty"}
        date={"Date"}
        timeEstimate={"Time Estimate"}
        resources={"Resources"}
      />
    </Container>
  );
};

export default TaskListHeader;

const Container = styled.div`
  border-bottom: 4px solid rgb(219, 165, 165);
  height: 4rem;
  margin-bottom: 20px;
`;

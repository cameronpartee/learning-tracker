import { BsQuestionCircleFill } from "react-icons/bs";
import styled from "styled-components";
import Cell from "../components/Cell";

const ListView = (props) => {
  return (
    <Container>
      <img
        src="/img/logo.png"
        alt=""
        style={{
          height: "20px",
          marginTop: "15px",
          marginLeft: "15px",
        }}
      />
      <BsQuestionCircleFill />
      {props.tasks.map((task) => (
        <Cell title={task.topic} />
      ))}
    </Container>
  );
};

export default ListView;

const Container = styled.div`
  margin: 10px;
  position: relative;
  img {
    width: auto%;
  }

  svg {
    position: absolute;
    right: 30px;
    top: 15px;
  }
`;

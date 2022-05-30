import { BsQuestionCircleFill } from "react-icons/bs";
import styled from "styled-components";
import Cell from "../components/Cell";

const HomeListView = (props) => {
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
        <Cell
          task={task}
          showDetail={props.showDetail}
          setStartIndex={props.setStartIndex}
        />
      ))}
    </Container>
  );
};

export default HomeListView;

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

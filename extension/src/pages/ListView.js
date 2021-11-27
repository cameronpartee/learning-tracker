import { BsPlusCircleDotted } from "react-icons/bs";
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
      <BsPlusCircleDotted />
      {props.tasks.map((task) => (
        <Cell
          task={task}
          showDetail={props.showDetail}
          getContent={props.getContent}
        />
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

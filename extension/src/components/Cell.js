import styled from "styled-components";

const Cell = (props) => {
  const onClickHandler = () => {
    props.getContent([props.task.description, props.task.codeSnip]);
    props.showDetail(true);
  };

  return (
    <CellContainer onClick={onClickHandler}>
      <img src="/img/greyblock.png" alt="" style={{ height: "6px" }} />
      <CellText>{props.task.description}</CellText>
      <img src="/img/dots.png" alt="" style={{ height: "6px" }} />
    </CellContainer>
  );
};

export default Cell;

const CellContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px rgb(245, 245, 245) solid;
  border-radius: 4px;
  position: relative;
  margin: 10px;
  padding: 4px;

  img {
    margin-left: 5px;
  }

  img:last-child {
    position: absolute;
    right: 10px;
  }

  :hover {
    background: rgb(245, 245, 245);
    cursor: pointer;
  }
`;

const CellText = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  color: rgb(50, 50, 50);
  margin-left: 5px;
`;

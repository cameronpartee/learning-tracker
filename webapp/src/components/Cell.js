import styled from "styled-components";
import { Link } from "react-router-dom";

const Cell = (props) => {
  return (
    <Link to="/detail" style={{ textDecoration: "none" }}>
      <CellContainer>
        <img src="/img/greyblock.png" alt="" style={{ height: "6px" }} />
        <CellText>{props.title}</CellText>
        <img src="/img/dots.png" alt="" style={{ height: "6px" }} />
      </CellContainer>
    </Link>
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
  font-size: 1em;
  font-weight: 500;
  color: rgb(50, 50, 50);
  margin-left: 5px;
`;

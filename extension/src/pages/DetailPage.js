import styled from "styled-components";
import { BsBackspaceFill, BsBackspaceReverseFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import CodeSandbox from "../components/CodeSandbox";

const DetailView = ({ tasks, startIndex, showHome }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // using a string id find the index of object in array
    let id = startIndex;
    let numIndex = 0;
    for (let i in tasks) {
      if (tasks[i].id === id) break;
      numIndex++;
    }
    setIndex(numIndex);
  }, [startIndex, tasks]);

  const onBacktoHomeButtonHandler = () => {
    showHome(false);
  };

  const onNextPageButtonHandler = () => {
    let length = tasks.length;
    let i = index + 1;
    i === length ? setIndex(0) : setIndex(i);
  };

  return (
    <Container>
      <Text>
        <div>
          <div onClick={onBacktoHomeButtonHandler}>
            <BsBackspaceFill />
            <span>Back to Home</span>
          </div>
          <div onClick={onNextPageButtonHandler}>
            <span>Next Page</span>
            <BsBackspaceReverseFill />
          </div>
        </div>
        <div>Problem Statement</div>
        <div>{tasks !== undefined && tasks[index].description}</div>
      </Text>
      <CodeSandbox
        src={
          "https://codesandbox.io/embed/frosty-lake-l2ul6?fontsize=10&hidenavigation=1&theme=dark"
        }
        title={"frosty-lake-l2ul6"}
      />
      <img src={tasks !== undefined && tasks[index].img} alt="" />
      <a
        href={tasks !== undefined && tasks[index].url}
        target="_blank"
        rel="noreferrer"
      >
        Learn More
      </a>
    </Container>
  );
};

export default DetailView;

const Container = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;

  img {
    margin-top: 20px;
    width: 95%;
  }

  a {
    text-align: right;
    margin-top: 10px;
    margin-right: 35px;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 35px;
    font-size: 0.9em;
    font-weight: 600;
  }
`;

const Text = styled.div`
  svg {
    color: grey;
  }

  > div:nth-child(1) {
    display: flex;
    position: relative;

    div {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    > div:last-child {
      position: absolute;
      right: 50px;
    }

    span {
      margin-left: 8px;
      margin-right: 8px;
      font-weight: 600;
    }
  }

  > div:nth-child(2) {
    margin-top: 45px;
    margin-bottom: 15px;
    font-weight: 600;
    text-align: center;
    font-size: 1.3em;
    width: 450px;
  }

  > div:nth-child(3) {
    margin-bottom: 25px;
    color: rgb(85, 85, 85);
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    width: 450px;
  }
`;

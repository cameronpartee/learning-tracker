import styled from "styled-components";
import { BsBackspaceFill, BsBackspaceReverseFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import IFrameComp from "./iframe";

const DetailView = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // using a string id find the index of onject in array
    let id = props.startIndex;
    let numIndex = 0;
    for (let i in props.tasks) {
      if (props.tasks[i].id === id) break;
      numIndex++;
    }
    setIndex(numIndex);
  }, [props.startIndex, props.tasks]);

  const onBacktoHomeButtonHandler = () => {
    props.showHome(false);
  };

  const onNextPageButtonHandler = () => {
    let length = props.tasks.length;
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
        <div>{props.tasks !== undefined && props.tasks[index].description}</div>
      </Text>
      <IFrameComp />
      {/* <Sandbox>
        <SandboxText>
          {props.tasks !== undefined && props.tasks[index].codeSnip}
        </SandboxText>
      </Sandbox> */}
      <img src={props.tasks !== undefined && props.tasks[index].img} alt="" />
      <a
        href={props.tasks !== undefined && props.tasks[index].url}
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

const Sandbox = styled.div`
  width: 90%;
  height: 70px;
  background: rgb(10, 10, 10);
  border: 1px grey solid;
  margin-bottom: 5px;
`;

const SandboxText = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  color: rgb(53, 192, 161);
  letter-spacing: 0.1px;
`;

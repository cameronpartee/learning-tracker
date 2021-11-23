import styled from "styled-components";
import { useEffect, useState } from "react";
import { BsBackspaceFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const DetailPage = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://learningtracker-a8476-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedTasks = [];

      // NEED TO ADD ANSWER PROPERTY
      for (const key in responseData) {
        loadedTasks.push({
          id: key,
          topic: responseData[key].topic,
          description: responseData[key].description,
          difficulty: responseData[key].difficulty,
          date: responseData[key].date,
          timeEstimate: responseData[key].timeEstimate,
          url: responseData[key].resources,
        });
      }

      setTasks(loadedTasks);
      setIsLoading(false);
    };

    fetchTasks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  return (
    <Container>
      <Text>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BsBackspaceFill />
        </Link>
        <div>Problem Statement</div>
        <div>{props.task.description}</div>
        <div>Example 1:</div>
      </Text>
      <Sandbox>
        <SandboxText>{"cp$ npx create-react-app app-name"}</SandboxText>
      </Sandbox>
      <img src="https://i.stack.imgur.com/TXGoT.png" alt="" />
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  margin-top: 30px;
  margin-left: 30px;

  img {
    margin-top: 30px;
    width: 90%;
  }
`;

const Text = styled.div`
   svg {
    margin-bottom: 35px;
   }

  > div:nth-child(2) {
    font-size: 1.5em;
    font-weight: 600;
    color: rgb(10, 10, 10);
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  > div:nth-child(3) {
    margin-bottom: 20px;
    color: rgb(85, 85, 85);
  }

  > div:last-child {
    font-weight: 600;
    color: rgb(10, 10, 10);
    letter-spacing: 1px;
    font-size 0.9em;
    margin-bottom: 15px;
  }
`;

const Sandbox = styled.div`
  width: 90%;
  height: 80px;
  background: rgb(10, 10, 10);
  border: 1px grey solid;
`;

const SandboxText = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  color: rgb(53, 192, 161);
`;

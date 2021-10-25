import styled from "styled-components";
import TaskList from "../Task/TaskList";
import TaskListHeader from "../Task/TaskListHeader";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Sidebar></Sidebar>
      {showModal && <Modal onClose={hideModalHandler}></Modal>}
      <Main>
        <Header>Learning Tracker</Header>
        <Grid>
          <Title>
            <div>List of Learned Concepts</div>
            <button onClick={showModalHandler} type="button">
              Add new concept
            </button>
          </Title>
          <FilterBar>
            <div>Search a concept</div>
          </FilterBar>
          <Content>
            <TaskListHeader></TaskListHeader>
            <TaskList></TaskList>
          </Content>
        </Grid>
      </Main>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100px auto;
`;

const Sidebar = styled.div`
  background: rgb(215, 215, 215);
`;

const Main = styled.div`
  display: grid;
  grid-template-rows: 75px auto;
  background: rgb(240, 240, 240);
`;
const Header = styled.div`
  border-bottom: 3px solid rgb(230, 230, 230);
  background: white;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  border-radius: 10px;
  margin: 75px;
  background: white;
  box-shadow: -0.2em 0 0.9em grey;
  display: grid;
  grid-template-rows: 100px 100px auto;
`;

const Title = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    border-radius: 2px;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
      background-color: rgb(180, 219, 170);
      border-radius: 5px;
      font-size: 16.5px;
      transition-duration: 0.2s;
    }
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;

  div {
    color: grey;
    font-size: 1.5rem;
    background: yellow;
    padding: 10px 25px;
    width: 100%;
  }
`;

const Content = styled.div``;

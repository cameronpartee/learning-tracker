import ReactDom from "react-dom";
import styled from "styled-components";
import ModalInput from "./ModalInput";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  let newConcept = {};

  const submitFormHandler = async (e) => {
    e.preventDefault();

    newConcept = {
      date: "10/10/21",
      description: e.target[1].value,
      difficulty: e.target[2].value,
      resources: e.target[4].value,
      timeEstimate: e.target[3].value,
      topic: e.target[0].value,
    };

    await fetch(
      `https://learningtracker-a8476-default-rtdb.firebaseio.com/tasks.json`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newConcept),
      }
    );
  };

  return (
    <>
      {ReactDom.createPortal(
        <ContainerBackdrop onClick={props.onClose}></ContainerBackdrop>,
        portalElement
      )}
      {ReactDom.createPortal(
        <ContainerModal>
          <form
            action="/action_page.php"
            method="get"
            onSubmit={submitFormHandler}
          >
            <Text>Add a concept</Text>
            <ModalInput title={"Concept Topic"} />
            <ModalInput title={"Concept Description"} />
            <ModalInput title={"Difficulty"} />
            <ModalInput title={"Time Estimate"} />
            <ModalInput title={"URL Reference"} />
            <input type="submit" value="Submit" />
            <br />
            <input type="button" value="Cancel" onClick={props.onClose} />
          </form>
        </ContainerModal>,
        portalElement
      )}
    </>
  );
};

export default Modal;

const ContainerBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ContainerModal = styled.div`
  position: fixed;
  top: 8vh;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 35rem;
  left: calc(50% - 20rem);
  height: 38rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 45px;
  }

  input {
    width: 90%;
    height: 30px;
    font-size: 1.3rem;
  }

  button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 15px 32px;

    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
`;

const Text = styled.div`
  font-size: 2rem;
  padding-bottom: 25px;
  padding-top: 15px;
`;

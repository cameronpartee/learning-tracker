import styled from "styled-components";

const ModalInput = (props) => {
  return (
    <Container>
      <label htmlFor="fname">{props.title}</label>
      <input type="text" />
      <br />
    </Container>
  );
};

export default ModalInput;

const Container = styled.div`
  display: grid;
  font-size: 1.3rem;

  label {
    padding-bottom: 5px;
  }
`;

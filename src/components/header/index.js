import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Container>gw170817</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  z-index: 2;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: black;
  color: whitesmoke;
`;

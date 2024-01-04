import styled from "styled-components";

export default function Sidebar(props) {
  const { visible } = props;
  console.log(visible);
  return (
    <Container visible={visible}>
      <Box>
        <BoxCenter>
          <Title>Titulo 1</Title>
        </BoxCenter>
        <Topic>Tema 1</Topic>
        <Topic>Tema 2</Topic>
        <Topic>Tema 3</Topic>

      </Box>
      <Box>
        <BoxCenter>
          <Title>Titulo 2 </Title>
        </BoxCenter>
        <Topic>Tema 1</Topic>
        <Topic>Tema 2</Topic>
        <Topic>Tema 3</Topic>
        <Topic>Tema 4</Topic>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 3;
  width: 30%;
  margin-top: 8vh;
  height: 80%;
  background-color: #141414;
  border-bottom-right-radius: 20px;
  transition: transform 0.6s ease; /* Adiciona a animação de transição */
  transform: translateX(${(props) => (props.visible ? "0" : "-100%")});
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #292929;
  margin-top:15px;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
`;
const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  //background-color: blue;
  width: 100%;
  border-bottom: black solid 1px;
  margin-bottom:10px;
`;

const Title = styled.text`
  font-size: 20px;
  color: whitesmoke;
`;
const Topic = styled.text`
  font-size: 16px;
  color: whitesmoke;
  margin-left:5px;
  margin-bottom:15px;
`;

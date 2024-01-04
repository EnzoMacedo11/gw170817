import styled from "styled-components";
import Header from "../../components/header";
import Globe from "react-globe.gl";

import labelsData from "../../components/labels/index";

export default function Home() {
  const windowHeight = window.innerHeight * 0.92;
  const windowWidth = window.innerWidth;

  console.log(windowHeight);
  console.log(windowWidth);
  return (
    <Container>
      <Header />
      <GlobeContainer>
        <Globe
          waitForGlobeReady={true}
          showGlobe={true}
          animateIn={true}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={labelsData}
          showGraticules={true}
          labelSize={0.0001}
          onGlobeClick={(labelsData) =>
            ` EventID: ${labelsData.text} <br/> PS: ${labelsData.PS} <br/> Lat: ${labelsData.lat} / Lng: ${labelsData.lng} <br/> area(90): ${labelsData.area90}`
          }
          labelDotRadius={1}
          width={windowWidth}
          height={windowHeight}
          labelColor={() => "#FF1F1F"}
          labelResolution={1}
          labelLabel={(labelsData) =>
            ` EventID: ${labelsData.text} <br/> PS: ${labelsData.PS} <br/> Lat: ${labelsData.lat} / Lng: ${labelsData.lng} <br/> area(90): ${labelsData.area90}`
          }
        />
      </GlobeContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: "//unpkg.com/three-globe/example/img/night-sky.png";
  background-color: black;
`;

const GlobeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 92vh;
  background-image:"//unpkg.com/three-globe/example/img/night-sky.png"
  background-color: black;
`;

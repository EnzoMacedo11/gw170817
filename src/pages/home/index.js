import styled from "styled-components"
import Header from "../../components/header"
import Globe from "react-globe.gl"
import { useState } from "react";
import labelsData from "../../components/labels";


export default function Home(){

const windowHeight = (window.innerHeight*0.8);
const windowWidth = (window.innerWidth*0.95);
        
console.log(windowHeight)
console.log(windowWidth)
    return(<>
    
    <Header/> 
     <Container>
       <Globe
    labelsData={labelsData}
    showGraticules={true}
    labelSize={.001}
    labelDotRadius={(labelsData)=>(labelsData.size)}
    width={windowWidth}
    height={windowHeight}
    backgroundColor="grey"
    labelColor={() => 'red'}
    labelResolution={2}
    labelLabel={(labelsData)=>(` ${labelsData.text} <br/> ${labelsData.lat} , ${labelsData.lng}` )}
    /> 

     
        </Container>
        </>
       
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
    width:100%;
    height:92vh;
    background-color:grey;
`



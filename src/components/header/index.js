import styled from "styled-components"
import { IoMenu, IoLogOutOutline} from "react-icons/io5";
import { useState } from "react";
import Sidebar from "../sidebar";


export default function Header(){
    const [visible,setVisible] = useState(false)

    function SidebarToogle(){
        if(visible === true){
            setVisible(false)
        }else{
            setVisible(true)
        }
    }

    return(<>
     <Container>
        
        
            gw17087
           
        </Container>
        </>
       
    )
}

const Container = styled.div`
    display:flex;
    z-index:2;
    top:0;
    justify-content:center;
    align-items:center;
    width:100%;
    height:8vh;
    background-color:black;
    color:whitesmoke;
`
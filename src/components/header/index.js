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
        <Sidebar visible={visible} />
        <IoMenu onClick={SidebarToogle} style={{marginLeft:20}} size={26}/>
            gw17087
            <IoLogOutOutline style={{marginRight:20}}size={26}/>
        </Container>
        </>
       
    )
}

const Container = styled.div`
    display:flex;
    z-index:2;
    top:0;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:8vh;
    background-color:black;
    color:whitesmoke;
`
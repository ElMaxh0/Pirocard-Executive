import React from "react";
import { useContent } from "../../hooks/contentid";
import { MenuBar } from "./styled";
import "./styles.css"

function NavMenu(){
    const {content, setContent} = useContent();
    return(
        <>
            <MenuBar>
                <i onClick={() => setContent(599)} >Pirocard Executive Simulator </i>
                <i style={{color:"red"}} className={"fas fa-card"} onClick={() => setContent(1)}/>
                <i className={"fas fa-user"} onClick={() => setContent(1)} />
            </MenuBar>
        </>
    )
}
export{
    NavMenu
}
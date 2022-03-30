import React from "react";

import styledComponents from "styled-components";
import styled from "styled-components";

const MenuBar = styled.nav `
background: rgba(255,252,255,1);
justify-content:space-around;
padding:1.65rem;
font-size:1.6rem;
display:flex;
align-items: center;

& :nth-child(2){
    font-size:2.5rem;
}


`
export{
    MenuBar
}
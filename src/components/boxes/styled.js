import styledComponents from "styled-components";

const BoxesStyled= styledComponents.div `
width:100%;
padding:1%;
color:rgba(255,245,255,1);

.boxes {
    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    max-width: 95%;
    margin: 0;
    grid-gap: 10px;
}
@media only screen and (hover: none) and (pointer: coarse){
  .boxes {
      display: grid;
      grid-template-columns: repeat(1 ,1fr);
      max-width: 95%;
      margin: 0;
      grid-gap: 10px;
  }
}
@media (max-width: 768px){
  .boxes {
      display: grid;
      grid-template-columns: repeat(1 ,1fr);
      max-width: 95%;
      margin: 0;
      grid-gap: 10px;
  }
}
.boxes> div {
    flex:1 1 600px ;
    margin: 7%;
}
.boxes> div >div {
    margin:1%;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    padding: 1%;
    background-color: rgb(24 24 24);
    backdrop-filter: blur(2px);
}
.boxes> div >div>div {
    width: 100%;
    min-height:50%;
    padding:0;
    display:flex;
    alogn-itens:center;
    text-align:center;
    background-color: rgba(16,16,16,1);
    border-radius: 25px;
}
.boxes> div >div>div >h99 {
    margin-left:auto;
    margin-right:auto;
    display:flex;
    align-itens:center;
    font-size:1rem;
}`

export default BoxesStyled
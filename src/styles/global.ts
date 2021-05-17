import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --text:#969CB2;
    --title: #363F5F;
    --shape: #FFFFFF;
    --red: #E52E4D;
    --green:#33CC95;
    --blue:#5429CC;
    --blue-light: #6933ff;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //font-size: 16px(desktop) 
  html {
    @media (max-width: 1080px) {
      font-size: 93.75% //16px
    }
    @media(max-width: 720px){
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; //é uma forma de deixar as fontes mais nítidas
  }
  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-not-allowed;
  }
`
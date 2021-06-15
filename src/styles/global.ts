import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --text:#969CB2;
    --text-body:#969CB2;
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
    @media(min-width: 720px){
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; //é uma forma de deixar as fontes mais nítidas
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400; // devido ser o tamanho padrão 
  }
  
  h1, h2, h3, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-not-allowed;
  }
  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 36rem;

    padding: 3rem;
    background: var(--background);
    position: relative;
    border-radius: 0.5rem;
  }
  .react-modal-close {
   position: absolute;
   right:1.5rem;
   top:1.5rem;
   border:0;
   background: transparent;
   
   transition: filter 0.2s;
   
   &:hover {
     filter: brightness(0.8);
   }
 }
`

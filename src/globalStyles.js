import styled, { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 16px;
    }

    body{
        padding-top: 4rem;
        --type-first: Helvetica,Arial,sans-serif;
        --type-second: "Spectral",Georgia;
        font-family: var(--type-first);
        color: #333;
    }

    img{
        max-width: 100%;
        display: block;
        object-fit: cover;
    }

    a{
        text-decoration: none;
        color: #333;
    }

    ul{
        list-style: none;
    }
    
    .AppBody{
      min-height: 100vh;
    }
`;

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: ${({ mT }) => (mT ? "2rem" : "")};
`;

export const Titulo = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Perro = styled.p`
  color: rgb(255, 51, 17);
  margin: 1rem 0px;
`;

export const Pfim = styled.p`
  font-size: 1.3rem;
  text-align: center;
  padding-bottom: 2rem;
`;

export default GlobalStyles;

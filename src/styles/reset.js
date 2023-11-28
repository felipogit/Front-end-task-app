import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

button{
    cursor: pointer;
    background: transparent;
    border: none;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol{
    list-style: none;
}


input{
    border-radius: 0;
    border: none;
    background: transparent;
}

img{
    max-width: 100%;
}

body, html {
    margin: 0;
    padding: 0;
}

`
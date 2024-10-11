import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #ebebeb;
    font-family: sans-serif;
  }

  a {
    color: initial;
    text-decoration: none;
  }
` as React.FC;

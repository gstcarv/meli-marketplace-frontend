import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Poppins,  -apple-system, 'Open-Sans', Roboto,  'Helvetica Neue', sans-serif;
    background-color: #ebebeb;
    letter-spacing: 0.3px;
    line-height: 1.35;
  }

  a {
    color: initial;
    text-decoration: none;
  }
` as React.FC;

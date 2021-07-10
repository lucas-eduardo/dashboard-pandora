import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: var(--background);

    color: var(--color);

    overflow: hidden;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
  }

  #notistack-snackbar {
    font-size: 1.5rem;
  }

  :root {
    --background: #f9fbfd;
    --color: #12263f;

    --textfield-color: #12263f;
    --textfield-placeholder-color: #95aac9;
    --textfield-background: #fff;
    --textfield-border: #d2ddec;
    --textfield-border-focus: #2c7be5;

    --icon-button-background-hover: rgba(0, 0, 0, 0.04);
    --icon-button-background-active: rgba(0, 0, 0, 0.08);

    --icon-theme: #12263f;
    --icon-settings: #12263f;
    --icon-exit: #c94141;

    --sidebar: #fff;
    --sidebar-color: #6e84a3;
    --sidebar-color-active: #6e84a3;
  }


  [data-theme='dark'] {
    --background: #12263f;
    --color: #fff;

    --textfield-color: #fff;
    --textfield-placeholder-color: #6e84a3;
    --textfield-background: #1e3a5c;
    --textfield-border: #1e3a5c;
    --textfield-border-focus: #2c7be5;

    --icon-button-background-hover: rgba(255, 255, 255, 0.04);
    --icon-button-background-active: rgba(255, 255, 255, 0.08);

    --icon-theme: #fff;
    --icon-settings: #fff;
    --icon-exit: #c94141;

    --sidebar: #152e4d;
    --sidebar-color-active: #fff;
  }
`

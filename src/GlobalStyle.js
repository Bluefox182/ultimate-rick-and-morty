import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* Let's SetUp our main variables */

:root{
    --primary-color: #4d74e6;
    --primary-color-light: ##4d74e6;
    --secondary-color: #6c757d;
    --background-navbar-color: #1B2430;
    --background-dark-color: #191919;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #F9F9F9;
    --white-color-2: #FFFFFF;
    --font-light-color: #F9F9F9;
    --font-light-color-2: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
} 

/* Let's create our Light and Dark Theme */

.light-theme{
    --primary-color: #4d74e6;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-navbar-color: #FFFFFF;
    /* --background-dark-color: #F9F9F9; */
    --background-dark-color: #F9F9F9;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #423F3E;
    --white-color-2: #FFFFFF;
    --font-light-color: #313131;
    --font-light-color-2: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #F9F9F9;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #4d74e6;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-navbar-color: #1B2430;
    --background-dark-color: #191919;
    --background-dark-grey: #191D2B;
    --border-color: #4d74e6;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FEFBE7;
    --white-color-2: #FFFFFF;
    --font-light-color: #FFFFFF;
    --font-light-color-2: #6c757d;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #111316;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

/* Let's create our Reset Styles and Body*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1rem;
    overflow-x: hidden;
    
}

body{
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-dark-color);
    transition: all 0.4s ease-in-out;
    
}

/* Finally let's create our Light/Dark Toggle Icon Style */
.light-dark-mode{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    right: 0;
    top: 70px;
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
    @media (max-width: 767px) {
    top: 5px;
    transition: all 0.4s ease-in-out;
  }

}
.left-content, .right-content {
    svg {
        font-size: 1.5rem;
    }
}

`;

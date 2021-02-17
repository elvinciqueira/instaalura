import {createGlobalStyle, css} from 'styled-components'
import {normalize} from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({theme}) => theme.fontFamily};
  }
  /* Full height layout */
  html, body {
    background-color: ${({theme}) => {
      const {mode: currentMode} = theme

      return theme.colors.modes[currentMode].background.main.color
    }};
    display: flex;
    min-height: 100vh;
    width: 100%;
  } 
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle

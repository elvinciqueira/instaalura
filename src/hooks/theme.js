import React from 'react'
import {ThemeProvider as StyleComponentsThemeProvider} from 'styled-components'
import theme from '../theme'

const ThemeContext = React.createContext()

const ThemeProvider = ({children}) => {
  const [currentMode, setCurrentMode] = React.useState({
    ...theme,
    currentTheme: 'light',
  })

  const toggleTheme = () => {
    if (currentMode.currentTheme === 'light') {
      setCurrentMode((currentMode) => ({
        ...currentMode,
        colors: theme.modes.dark,
        currentTheme: 'dark',
      }))
    } else {
      setCurrentMode((currentMode) => ({
        ...currentMode,
        colors: theme.modes.light,
        currentTheme: 'light',
      }))
    }
  }

  return (
    <StyleComponentsThemeProvider theme={currentMode}>
      <ThemeContext.Provider value={{theme: currentMode, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </StyleComponentsThemeProvider>
  )
}

function useTheme() {
  const context = React.useContext(ThemeContext)

  return context
}

export {useTheme, ThemeProvider}

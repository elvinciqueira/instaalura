import React, {useCallback, createContext, useState, useContext} from 'react'
import {ThemeProvider as StyleComponentsThemeProvider} from 'styled-components'
import theme from '../theme'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [currentMode, setCurrentMode] = useState('light')

  const toggleTheme = useCallback(
    () =>
      setCurrentMode((currentMode) =>
        currentMode === 'light' ? 'dark' : 'light',
      ),
    [],
  )

  return (
    <StyleComponentsThemeProvider theme={{...theme, mode: currentMode}}>
      <ThemeContext.Provider value={{currentMode, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </StyleComponentsThemeProvider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)

  return context
}

export {useTheme, ThemeProvider}

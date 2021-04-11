import React, {createContext, useState, useContext, useEffect} from 'react'
import {setCookie, parseCookies} from 'nookies'
import {ThemeProvider as StyleComponentsThemeProvider} from 'styled-components'

import theme from '../../../../theme'

const ThemeContext = createContext({
  toggleTheme: () => {},
  currentMode: '',
})

const ThemeProvider = ({children}) => {
  const [currentMode, setCurrentMode] = useState('light')

  useEffect(() => {
    const {theme} = parseCookies()

    if (theme) {
      setCurrentMode(theme)
    }
  }, [])

  const toggleTheme = () => {
    setCurrentMode((currentMode) => {
      const theme = currentMode === 'light' ? 'dark' : 'light'

      setCookie(null, 'theme', theme, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      return theme
    })
  }

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

import React from 'react'
import {ThemeProvider} from './theme'

const AppProvider = ({children}) => <ThemeProvider>{children}</ThemeProvider>

export default AppProvider

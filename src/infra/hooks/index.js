import React from 'react'
import {ThemeProvider} from './theme/useTheme'

const AppProvider = ({children}) => <ThemeProvider>{children}</ThemeProvider>

export default AppProvider

import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../../../../theme/GlobalStyle'
import AppProvider from '../../../../hooks'

export default function WebsiteGlobalProvider({children}) {
  return (
    <AppProvider>
      <GlobalStyle />
      {children}
    </AppProvider>
  )
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

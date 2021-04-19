import React from 'react'

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
  toggleModalRecordImage: () => {},
  getCMSContent: (cmsKey) => cmsKey,
})

import React from 'react'
import WebsiteGlobalProvider from './src/components/wrappers/WebsitePage/provider'

// Configs e Extensões do Jest
import 'jest-styled-components' // Styled Components
import 'jest-canvas-mock' // <Lottie /> (JS-DOM)
import '@testing-library/jest-dom' // Traz expects decentes para lidar com styles e outras coisas do HTML
import renderer from 'react-test-renderer'

global.rendererCreateWithTheme = (Tree) =>
  renderer.create(<WebsiteGlobalProvider>{Tree}</WebsiteGlobalProvider>)

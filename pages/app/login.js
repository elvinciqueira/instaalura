import LoginScreen from '../../src/components/screens/app/LoginScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImageTheme: true,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
})

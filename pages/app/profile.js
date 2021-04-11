import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../src/theme/Logo'
import {FiHome, FiHeart} from 'react-icons/fi'
import {Grid} from '../../src/components/foundation/layout/Grid'
import {Flex} from '../../src/components/foundation/layout/Flex'
import {Box} from '../../src/components/foundation/layout/Box'
import Typography from '../../src/components/foundation/Typography'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

import {authService} from '../../src/services/auth/authService'
import {userService} from '../../src/services/user/userService'

const Wrapper = styled.div`
  width: 100%;
`

const Header = styled.header`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 28px;
`

const ButtonModal = styled.button`
  border-radius: 50%;
  font-weight: bold;
  font-size: 18px;
  width: 32px;
  height: 32px;
  margin: 0 32px;
  border: 0;
  color: #fff;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  background-color: ${({theme}) =>
    theme.colors.modes[theme.mode].secondary.main.color};
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) =>
    theme.colors.modes[theme.mode].background.light.color};
`

Header.LeftSide = styled.div``

Header.RightSide = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 32px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({theme}) =>
        theme.colors.modes[theme.mode].secondary.main.color};
    }
  }
`

const ProfileAvatar = styled.div`
  background-color: #333;
  border-radius: 50%;
  width: 188px;
  height: 188px;
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #333;
  border-radius: 50%;
`

function ProfilePage() {
  return (
    <Wrapper>
      <Header>
        <Header.LeftSide>
          <Logo />
        </Header.LeftSide>

        <Header.RightSide>
          <ButtonModal
            type="button"
            variant="primary.main"
            borderRadius="50%"
            padding="0"
          >
            +
          </ButtonModal>

          <FiHome />
          <FiHeart />
          <Avatar />
        </Header.RightSide>
      </Header>

      <ContentWrapper>
        <Grid.Container paddingTop="80px">
          <Grid.Row alignItems="center">
            <Grid.Col offset={3} value={{md: 3}}>
              <ProfileAvatar />
            </Grid.Col>
            <Grid.Col value={{md: 6}}>
              <Box display="flex" flexDirection="column">
                <Box display="flex" marginBottom="32px">
                  <Flex flexDirection="column">
                    <Typography variant="titleXS" color="tertiary.main">
                      234
                    </Typography>
                    <Typography
                      variant="paragraph1"
                      color="tertiary.light"
                      marginTop="8px"
                    >
                      Publicações
                    </Typography>
                  </Flex>
                  <Flex flexDirection="column" margin="0 32px">
                    <Typography variant="titleXS" color="tertiary.main">
                      22k
                    </Typography>
                    <Typography
                      variant="paragraph1"
                      color="tertiary.light"
                      marginTop="8px"
                    >
                      Seguindo
                    </Typography>
                  </Flex>
                  <Flex flexDirection="column">
                    <Typography variant="titleXS" color="tertiary.main">
                      134
                    </Typography>
                    <Typography
                      variant="paragraph1"
                      color="tertiary.light"
                      marginTop="8px"
                    >
                      Seguidores
                    </Typography>
                  </Flex>
                </Box>

                <Flex flexDirection="column">
                  <Typography variant="titleXS" color="tertiary.main">
                    Nicolas Cage
                  </Typography>
                  <Typography
                    variant="paragraph1"
                    color="tertiary.light"
                    marginTop="8px"
                  >
                    A wholesom person responsive for the best movies ever
                  </Typography>
                </Flex>
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </ContentWrapper>

      {/* <Feed /> */}
    </Wrapper>
  )
}

export async function getServerSideProps(ctx) {
  const auth = authService(ctx)
  const hasActiveSession = await auth.hasActiveSession()

  if (hasActiveSession) {
    const session = await auth.getSession()
    const profilePage = await userService.getProfilePage(ctx)
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    }
  }

  ctx.res.writeHead(307, {location: '/login'})
  ctx.res.end()

  return {
    props: {},
  }
}

export default websitePageHOC(ProfilePage, {
  pageWrapperProps: {
    menuProps: {
      display: false,
    },
    footerProps: {
      display: false,
    },
  },
})

import React from 'react'
import styled, {css} from 'styled-components'
import {Logo} from '../../src/theme/Logo'
import {FiHome, FiHeart, FiSearch} from 'react-icons/fi'
import {Grid} from '../../src/components/foundation/layout/Grid'
import {Flex} from '../../src/components/foundation/layout/Flex'
import {Box} from '../../src/components/foundation/layout/Box'
import Typography from '../../src/components/foundation/Typography'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'
import {breakPointsMedia} from '../../src/theme/utils/breakPointsMedia'

import {authService} from '../../src/services/auth/authService'
import {userService} from '../../src/services/user/userService'

const Wrapper = styled.div`
  width: 100%;
`

const Header = styled.header`
  display: flex;
  background-color: white;
  align-items: center;
  ${breakPointsMedia({
    xs: css`
      justify-content: center;
    `,
    md: css`
      justify-content: space-evenly;
    `,
  })}
  flex-wrap: wrap;
  padding: 28px;
  border-bottom: 1px solid #d5d5d5;

  ${breakPointsMedia({
    xs: css`
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      border-radius: 24px 24px 0px 0px;
    `,
    md: css`
      position: unset;
    `,
  })}
`

const ButtonModal = styled.button`
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakPointsMedia({
    xs: css`
      width: 40px;
      height: 40px;
      font-size: 28px;
    `,

    md: css`
      width: 32px;
      height: 32px;
    `,
  })}

  border: 0;
  color: #fff;
  transition: opacity 0.2s;
  box-shadow: 0px 0px 12px rgba(251, 123, 107, 0.3);

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  background-color: ${({theme}) =>
    theme.colors.modes[theme.mode].secondary.main.color};
`

const ContentWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) =>
    theme.colors.modes[theme.mode].background.light.color};
`

Header.LeftSide = styled.div`
  ${breakPointsMedia({
    xs: css`
      svg {
        display: none;
      }
    `,
    md: css`
      svg {
        display: block;
      }
    `,
  })}
`

Header.RightSide = styled.div`
  display: flex;
  align-items: center;

  svg:nth-of-type(2) {
    order: -1;
  }

  svg:nth-of-type(1) {
    margin: 0 26px;
  }

  svg:nth-of-type(3) {
    margin: 0 26px;
  }

  ${breakPointsMedia({
    md: css`
      svg:nth-of-type(2) {
        order: 0;
        margin-left: 26px;
      }
    `,
  })}

  svg {
    ${breakPointsMedia({
      xs: css`
        width: 24px;
        height: 24px;
      `,

      md: css`
        width: 32px;
        height: 32px;
      `,
    })}

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

  ${breakPointsMedia({
    xs: css`
      width: 77px;
      height: 77px;
      margin-right: 10px;
    `,
    md: css`
      width: 150px;
      height: 150px;
    `,
  })}
`

const Avatar = styled.div`
  ${breakPointsMedia({
    xs: css`
      width: 24px;
      height: 24px;
    `,

    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
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
          <FiSearch />

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
        <Grid.Container paddingTop="64px">
          <Grid.Row alignItems="center" justifyContent="center">
            <Grid.Col
              offset={{xs: 0, md: 2}}
              value={{xs: 3, md: 3}}
              padding={{xs: '0'}}
              display="flex"
              justifyContent="center"
            >
              <ProfileAvatar />
            </Grid.Col>
            <Grid.Col>
              <Grid.Row>
                <Grid.Col value={{xs: 3, md: 3}} padding={{xs: '0'}}>
                  <Flex flexDirection="column">
                    <Typography variant={'titleXS'} color="tertiary.main">
                      22K
                    </Typography>
                    <Typography
                      variant="paragraph1"
                      color="tertiary.light"
                      marginTop="8px"
                    >
                      Publicações
                    </Typography>
                  </Flex>
                </Grid.Col>
                <Grid.Col
                  value={{xs: 3, md: 3}}
                  padding={{xs: '0'}}
                  margin={{xs: '0 32px', md: '0'}}
                >
                  <Flex flexDirection="column">
                    <Typography variant={'titleXS'} color="tertiary.main">
                      22K
                    </Typography>
                    <Typography
                      variant={'paragraph1'}
                      color="tertiary.light"
                      marginTop="8px"
                    >
                      Seguidores
                    </Typography>
                  </Flex>
                </Grid.Col>
                <Grid.Col value={{xs: 3, md: 3}} padding={{xs: '0'}}>
                  <Flex flexDirection="column">
                    <Typography variant={'titleXS'} color="tertiary.main">
                      22K
                    </Typography>
                    <Typography
                      variant={'paragraph1'}
                      color="tertiary.light"
                      marginTop="8px"
                    >
                      Seguindo
                    </Typography>
                  </Flex>
                </Grid.Col>
              </Grid.Row>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col
              offset={{xs: 0.5, md: 5}}
              value={{xs: 10, md: 10}}
              padding="0"
              marginTop={{xs: '32px', md: '0'}}
            >
              <Flex flexDirection="column">
                <Typography variant={'titleXS'} color="tertiary.main">
                  Nicolas Cage
                </Typography>
                <Typography
                  variant={'paragraph1'}
                  color="tertiary.light"
                  marginTop="8px"
                >
                  A wholesome person responsible for the best movies ever.
                </Typography>
              </Flex>
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

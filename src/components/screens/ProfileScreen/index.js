import React from 'react'
import {Logo} from '../../../theme/Logo'
import {FiHome, FiHeart, FiSearch} from 'react-icons/fi'

import {Grid} from '../../foundation/layout/Grid'
import {Flex} from '../../foundation/layout/Flex'
import Typography from '../../foundation/Typography'

import {
  Avatar,
  ButtonModal,
  ContentWrapper,
  Header,
  Wrapper,
  ProfileAvatar,
} from './styles'

export default function ProfileScreen() {
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

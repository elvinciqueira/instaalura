import React from 'react'
import {Logo} from '../../../theme/Logo'
import {FiHome, FiHeart, FiSearch} from 'react-icons/fi'
import useSWR from 'swr'

import {Grid} from '../../foundation/layout/Grid'
import {Box} from '../../foundation/layout/Box'
import {Flex} from '../../foundation/layout/Flex'
import Typography from '../../foundation/Typography'
import {WebsitePageContext} from '../../wrappers/WebsitePage/index'

import {postService} from '../../../services/post/postService'

import {
  Avatar,
  ButtonModal,
  ContentWrapper,
  Header,
  Wrapper,
  ProfileAvatar,
} from './styles'

export default function ProfileScreen({user}) {
  const {data, error} = useSWR('api/users/posts', postService().getPosts)

  const websitePageContext = React.useContext(WebsitePageContext)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const handleOpenModal = () => websitePageContext.toggleModalRecordImage()

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
            onClick={handleOpenModal}
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
                  {user.username}
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

        <Grid.Container marginTop="64px">
          <Grid.Row>
            {data.map((post) => (
              <Grid.Col
                offset={{xs: 0, md: 1}}
                key={post._id}
                value={{xs: 4, md: 3}}
              >
                <Box
                  cursor="pointer"
                  marginTop="32px"
                  className={post.filter}
                  width={{xs: '112px', md: '250px'}}
                  height={{xs: '112px', md: '250px'}}
                  backgroundImage={`url(${post.photoUrl})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                />
              </Grid.Col>
            ))}
          </Grid.Row>
        </Grid.Container>
      </ContentWrapper>
    </Wrapper>
  )
}

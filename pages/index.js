import React from 'react'
import {Button} from '../src/components/common/Button'
import {Grid} from '../src/components/foundation/layout/Grid'
import {Box} from '../src/components/foundation/layout/Box'
import Typography from '../src/components/foundation/Typography'
import {WebsitePageContext} from '../src/components/wrappers/WebsitePage'
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc'

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext)
  const handleOpenModal = () => websitePageContext.toggleModalCadastro()

  return (
    <Box flex={1} display="flex" justifyContent="column">
      <Grid.Container marginTop={{xs: '32px', md: '32px'}}>
        <Grid.Row>
          <Grid.Col
            offset={1}
            value={{xs: 12, md: 5}}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column"
          >
            <div>
              <Typography
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Typography>
              <Typography
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </Typography>

              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                onClick={handleOpenModal}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col marginTop={{xs: '32px'}} value={{xs: 12, md: 6}}>
            <img
              style={{display: 'block', margin: 'auto'}}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  )
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: `url(images/bubble.svg)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
})

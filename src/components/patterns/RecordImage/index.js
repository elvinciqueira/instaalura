import React, {useState} from 'react'
import Flickity from 'react-flickity-component'
import useSWR from 'swr'

import {Box} from '../../foundation/layout/Box'
import {Button} from '../../common/Button'
import {Grid} from '../../foundation/layout/Grid'
import Typography from '../../foundation/Typography'
import TextField from '../../forms/TextField'
import {useTheme} from '../../../infra/hooks/theme/useTheme'
import {FiArrowRight} from 'react-icons/fi'
import {instagramFilters} from '../../../theme/instagramFilters'

import {postService} from '../../../services/post/postService'

function FormContent({setImageURL, imageURL}) {
  const inputRef = React.createRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    setImageURL(inputRef.current.value)
  }

  return (
    <form
      id="formRecordImage"
      style={{position: 'relative'}}
      onSubmit={handleSubmit}
    >
      <TextField
        ref={inputRef}
        placeholder="URL da Imagem"
        defaultValue={imageURL}
        type="url"
        name="image_url"
        fullWidth
      />
      <Typography
        tag="p"
        variant="paragraph2"
        color="tertiary.light"
        textAlign="center"
      >
        Formatos suportados: jpg, png, svg e xpto
      </Typography>
      <Button
        position="absolute"
        variant="secondary.main"
        type="submit"
        right="0"
        top="0"
        display="inline-flex"
        padding="12px 26px"
        justifyContent="center"
        alignItems="center"
        onClick={handleSubmit}
      >
        <FiArrowRight size={20} />
      </Button>
    </form>
  )
}

export default function RecordImage({propsDoModal, onClose}) {
  const {data} = useSWR('api/users/posts', postService().getPosts)

  const {currentMode} = useTheme()

  const [activeStep, setActiveStep] = useState(0)
  const [imageURL, setImageURL] = useState('')
  const [filter, setFilter] = useState('')

  const handleUpdatePosts = (newPost) => data?.push(newPost)

  const resetAllState = () => {
    setActiveStep(0)
    setImageURL('')
    setFilter('')
    onClose()
  }

  const handleCreatePost = async () => {
    const newPost = await postService().createPost({
      photoUrl: imageURL,
      description: 'a wholesome post',
      filter,
    })

    if (newPost) handleUpdatePosts(newPost)

    resetAllState()
  }

  if (!data) return <p>Carregando...</p>

  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
      padding={{xs: '0', md: '32px 0'}}
    >
      <Grid.Col
        display="flex"
        paddingRight="0"
        paddingLeft="0"
        flex={1}
        value={{xs: 12, md: 6, lg: 4}}
      >
        <Box
          width="100%"
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          position="relative"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          flex={1}
          padding={'75px 0 0 0'}
          backgroundColor={currentMode === 'light' ? '#fff' : '#181F22'}
          {...propsDoModal}
        >
          <propsDoModal.CloseButton />
          <Box
            id="image-preview"
            className={filter}
            width="100%"
            flex={1}
            backgroundColor="#D4D4D4"
            backgroundImage={`url(${imageURL})`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
          />

          <Box
            padding="32px"
            flex={1}
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            {activeStep === 0 && (
              <FormContent setImageURL={setImageURL} imageURL={imageURL} />
            )}

            {activeStep === 1 && (
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={{
                  wrapAround: true,
                  freeScroll: true,
                  contain: true,
                  // disable previous & next buttons and dots
                  prevNextButtons: false,
                  pageDots: false,
                  lazyLoad: 1,
                }}
              >
                {instagramFilters.map((filter) => (
                  <figure
                    onClick={() => setFilter(filter)}
                    className={filter}
                    key={filter}
                  >
                    <img src={imageURL} width="88" height="88" alt="Image" />
                  </figure>
                ))}
              </Flickity>
            )}

            {activeStep === 1 ? (
              <Button
                id="postButton"
                type="button"
                marginTop="32px"
                fullWidth
                variant="primary.main"
                onClick={handleCreatePost}
                disabled={!filter}
              >
                Postar
              </Button>
            ) : (
              <Button
                id="nextStepButton"
                type="button"
                marginTop="32px"
                fullWidth
                disabled={!imageURL}
                variant="primary.main"
                onClick={() => setActiveStep(activeStep + 1)}
              >
                Avançar
              </Button>
            )}
          </Box>
        </Box>
      </Grid.Col>
    </Grid.Row>
  )
}

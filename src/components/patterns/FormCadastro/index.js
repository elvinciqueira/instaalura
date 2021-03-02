import React from 'react'
import {Grid} from '../../foundation/layout/Grid'
import {Box} from '../../foundation/layout/Box'
import {Lottie} from '@crello/react-lottie'
import Typography from '../../foundation/Typography'
import TextField from '../../forms/TextField'
import {Button} from '../../common/Button'
import {useTheme} from '../../../hooks/theme'
import useForm from '../../../hooks/useForm'
import errorAnimation from './animations/error.json'
import successAnimation from './animations/success.json'

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
}

function FormContent() {
  const {handleChange, handleSubmit, values} = useForm(register)
  const [isFormSubmited, setIsFormSubmited] = React.useState(false)
  const [submissionStatus, setSubmitionStatus] = React.useState(
    formStates.DEFAULT,
  )

  function register() {
    const {username, name} = values

    setIsFormSubmited(true)

    const userDTO = {
      username,
      name,
    }

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((serverResponse) => {
        if (serverResponse.ok) {
          return serverResponse.json()
        }

        throw new Error('Não foi possível cadastrar o usuário agora :(')
      })
      .then((responseData) => {
        setSubmitionStatus(formStates.DONE)

        console.log(responseData)
      })
      .catch((error) => {
        setSubmitionStatus(formStates.ERROR)

        console.log(error)
      })
  }

  const isFormValid = values.username.length === 0 || values.name.length === 0

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Typography variant="title" tag="h1" color="tertiary.main">
          Pronto para saber da vida dos outros?
        </Typography>
        <Typography
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          marginBottom="32px"
        >
          Você está a um passo de saber tudoo que está rolando no bairro,
          complete seu cadastro agora!
        </Typography>

        <TextField
          type="text"
          name="username"
          value={values.username}
          placeholder="Usuário"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="name"
          value={values.name}
          placeholder="Nome"
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormValid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center" margin="16px 0">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: successAnimation,
              loop: true,
              autoplay: true,
            }}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center" margin="16px 0">
          <Lottie
            width="150px"
            height="150px"
            config={{animationData: errorAnimation, loop: true, autoplay: true}}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}
    </form>
  )
}

export default function FormCadastro({propsDoModal}) {
  const {currentMode} = useTheme()

  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{md: '0'}}
        flex={1}
        value={{xs: 12, md: 5, lg: 4}}
      >
        <div
          style={{
            position: 'absolute',
            left: '97%',
            bottom: '93%',
            cursor: 'pointer',
          }}
        >
          <img src="images/close.svg" alt="Close Button" />
        </div>

        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor={currentMode === 'light' ? '#fff' : '#181F22'}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  )
}

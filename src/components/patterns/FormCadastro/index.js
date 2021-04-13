import React from 'react'
import {Grid} from '../../foundation/layout/Grid'
import {Box} from '../../foundation/layout/Box'
import {Lottie} from '@crello/react-lottie'
import Typography from '../../foundation/Typography'
import TextField from '../../forms/TextField'
import {Button} from '../../common/Button'
import * as yup from 'yup'
import {useTheme} from '../../../infra/hooks/theme/useTheme'
import useForm from '../../../infra/hooks/forms/useForm'
import errorAnimation from './animations/error.json'
import successAnimation from './animations/success.json'
import {registerService} from '../../../services/register/registerService'

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
}

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  name: yup.string().required('"Nome" é obrigatório'),
})

function FormContent() {
  const initialState = {
    username: '',
    name: '',
  }
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleBlur,
    touched,
  } = useForm({
    initialState,
    onSubmit,
    validateSchema,
  })
  const [isFormSubmited, setIsFormSubmited] = React.useState(false)
  const [submissionStatus, setSubmitionStatus] = React.useState(
    formStates.DEFAULT,
  )

  async function validateSchema(values) {
    return registerSchema.validate(values, {
      abortEarly: false,
    })
  }

  function onSubmit(values) {
    const {username, name} = values

    setIsFormSubmited(true)

    registerService
      .execute({
        data: {
          username,
          name,
        },
      })
      .then((responseData) => {
        setSubmitionStatus(formStates.DONE)

        console.log('response', responseData)
      })
      .catch((error) => {
        setSubmitionStatus(formStates.ERROR)
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
          error={errors.username}
          isTouched={touched.username}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="name"
          value={values.name}
          placeholder="Nome"
          onChange={handleChange}
          error={errors.name}
          isTouched={touched.name}
          onBlur={handleBlur}
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
          <propsDoModal.CloseButton />
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  )
}

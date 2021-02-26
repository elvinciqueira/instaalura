import React, {useState} from 'react'
import {Grid} from '../../foundation/layout/Grid'
import {Box} from '../../foundation/layout/Box'
import Typography from '../../foundation/Typography'
import TextField from '../../forms/TextField'
import {Button} from '../../common/Button'
import {useTheme} from '../../../hooks/theme'
import useForm from '../../../hooks/useForm'

function FormContent() {
  const {handleChange, handleSubmit, values} = useForm(register)

  function register() {
    console.log(values)
  }

  const isFormValid = values.usuario.length === 0 || values.email.length === 0

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
          type="email"
          name="email"
          value={values.email}
          placeholder="E-mail"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="usuario"
          value={values.usuario}
          placeholder="Usuário"
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

import TextField from '../../forms/TextField'
import {Button} from '../../common/Button'
import useForm from '../../../infra/hooks/forms/useForm'
import {useRouter} from 'next/router'
import * as yup from 'yup'
import {loginService} from '../../../services/login/loginService'

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
})

export default function LoginForm() {
  const initialState = {
    usuario: '',
    senha: '',
  }
  const router = useRouter()
  const form = useForm({
    initialState,
    onSubmit: (values) => {
      loginService
        .login({
          username: values.usuario,
          password: values.senha,
        })
        .then(() => {
          router.push('/app/profile')
        })
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      })
    },
  })

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        error={form.errors.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  )
}

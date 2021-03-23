import TextField from '../../forms/TextField'
import {Button} from '../../common/Button'
import useForm from '../../../infra/hooks/forms/useForm'
import {useRouter} from 'next/router'
import {loginService} from '../../../services/login/loginService'

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
  })

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  )
}

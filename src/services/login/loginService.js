import HttpClient from '../../infra/HttpClient'

export const loginService = {
  async login({username, password}) {
    return HttpClient('https://instalura-api.vercel.app/api/login', {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((response) => {
      console.log(response)

      return response
    })
  },
}

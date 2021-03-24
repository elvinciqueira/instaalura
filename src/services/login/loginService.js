import HttpClient from '../../infra/HttpClient'
import {setCookie, destroyCookie} from 'nookies'

export const loginService = {
  async login({username, password}) {
    return HttpClient('https://instalura-api.vercel.app/api/login', {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((response) => {
      const {token} = response.data
      const DAY_IN_SECONDS = 86400

      setCookie(null, 'APP_TOKEN', token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      })

      console.log(response)

      return {
        token,
      }
    })
  },

  logout() {
    destroyCookie(null, 'APP_TOKEN')
  },
}
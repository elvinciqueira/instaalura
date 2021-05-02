import HttpClient from '../../infra/HttpClient'
import {setCookie, destroyCookie} from 'nookies'
import {isStagingEnv} from '../../infra/env/isStagingEnv'

const BASE_URL = isStagingEnv
  ? 'https://instalura-api.vercel.app'
  : 'https://instalura-api.vercel.app'

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN'

export const loginService = {
  async login(
    {username, password},
    setCookieModule = setCookie,
    HttpClientModule = HttpClient,
  ) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((response) => {
      const {token} = response.data
      const hasToken = token
      if (!hasToken) {
        throw new Error('Failed to login')
      }
      const DAY_IN_SECONDS = 86400

      setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      })

      return {
        token,
      }
    })
  },

  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, {path: '/'})
  },
}

import {parseCookies} from 'nookies'
import HttpClient from '../../infra/HttpClient'
import {LOGIN_COOKIE_APP_TOKEN} from '../login/loginService'

import {isStagingEnv} from '../../infra/env/isStagingEnv'

const BASE_URL = isStagingEnv
  ? // Back End de DEV
    'https://instalura-api.vercel.app'
  : // Back End de PROD
    'https://instalura-api.vercel.app'

export const postService = () => {
  const cookies = parseCookies()
  const token = cookies[LOGIN_COOKIE_APP_TOKEN]

  return {
    async createPost({photoUrl, description, filter}) {
      try {
        const response = await HttpClient(`${BASE_URL}/api/posts`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            photoUrl,
            description,
            filter,
          },
        })
        console.log('response', response)
        return response.data
      } catch (e) {
        throw new Error(e)
      }
    },

    async getPosts(url) {
      try {
        const response = await HttpClient(url, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })

        return response.data
      } catch (e) {
        throw new Error(e)
      }
    },
  }
}

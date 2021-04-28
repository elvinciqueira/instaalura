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
    async createPost(
      {photoUrl, description, filter},
      HttpClientModule = HttpClient,
    ) {
      try {
        const response = await HttpClientModule(`${BASE_URL}/api/posts`, {
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

        return response.data
      } catch (err) {
        throw new Error('Não foi possível criar um novo post')
      }
    },

    async likeDislike(postId, HttpClientModule = HttpClient) {
      const response = await HttpClientModule(
        `${BASE_URL}/api/posts/${postId}/like`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {},
        },
      )

      return response.data
    },

    async getPosts(path, HttpClientModule = HttpClient) {
      try {
        const url = `${BASE_URL}/${path}`

        const response = await HttpClientModule(url, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })

        return response.data
      } catch (e) {
        throw new Error('Não foi possível pegar os posts')
      }
    },
  }
}

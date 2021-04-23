import {isStagingEnv} from '../../infra/env/isStagingEnv'
import HttpClient from '../../infra/HttpClient'
import {authService} from '../auth/authService'

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master.omariosouto.vercel.app'
  : 'https://instalura-api.omariosouto.vercel.app'

export const userService = {
  async getProfilePage(ctx, HttpClientModule = HttpClient, authServiceModule = authService) {
    const url = `${BASE_URL}/api/users/posts`
    try {
      const token = await authServiceModule(ctx).getToken()
      const response = await HttpClientModule(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      return {
        user: {
          totalLikes: 100,
        },
        posts: response.data,
      }
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts')
    }
  },
}

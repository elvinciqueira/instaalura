import HttpClient from '../../infra/HttpClient'

export const registerService = {
  execute: async ({data}) => {
    return HttpClient('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    }).then((response) => {
      console.log('response', response)

      return response
    })
  },
}

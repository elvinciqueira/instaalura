import {postService} from './postService'

const data = {
  photoUrl: 'image-url',
  description: 'awesome description',
  filter: 'instagram-filter',
}

async function HttpClientModule() {
  return {
    data: [data],
  }
}

describe('postService', () => {
  describe('createPost()', () => {
    describe('when user create a new post', () => {
      describe('and succeed', () => {
        test('return post data', async () => {
          const responseData = [data]
          const response = await postService().createPost(
            {
              photoUrl: 'image-url',
              description: 'awesome description',
              filter: 'instagram-filter',
            },
            HttpClientModule,
          )

          expect(response).toEqual(responseData)
        })
      })
    })
  })

  describe('getPosts()', () => {
    describe('when user try to get new posts', () => {
      describe('and succeed', () => {
        test('return all posts', async () => {
          const responseData = [data]
          const response = await postService().getPosts(
            'api/users/post',
            HttpClientModule,
          )

          expect(response).toEqual(responseData)
        })
      })
    })
  })
})

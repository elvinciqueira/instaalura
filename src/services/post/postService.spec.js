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

const HttpClientModuleError = jest.fn()

describe('postService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

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

    describe('and fails', () => {
      test('throws an error', async () => {
        HttpClientModuleError.mockImplementationOnce(() =>
          Promise.reject('Não foi possível criar o post'),
        )

        try {
          await postService().createPost(
            {
              photoUrl: 'image-url',
              description: 'awesome description',
              filter: 'instagram-filter',
            },
            HttpClientModuleError,
          )
        } catch (error) {
          expect(error).toMatchSnapshot()
        }

        expect(HttpClientModuleError).toHaveBeenCalledTimes(1)
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

      describe('and fails', () => {
        test('throws an error', async () => {
          HttpClientModuleError.mockImplementationOnce(() =>
            Promise.reject('Não foi possível carregar os posts'),
          )

          try {
            await postService().getPosts(
              'api/users/post',
              HttpClientModuleError,
            )
          } catch (error) {
            expect(error).toMatchSnapshot()
          }

          expect(HttpClientModuleError).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})

import {userService} from './userService'

const posts = [{
  _id: 'fake-id',
  photoUrl: 'image-url',
  filter: 'instagram-filter',
  description: 'awesome description'
}]


const authServiceModule = jest.fn(() => ({
  getToken: jest.fn(() => 'fake-token')
}))

const HttpClientModule = jest.fn()
  .mockImplementationOnce(() => Promise.resolve({ data: posts}))

describe('userService', () => {
  describe('getProfilePage()', () => {
    describe('when logged in', () => {
      it('returns user profile data', async () => {
        const expectedResponseData = {
          user: {
            totalLikes: 100
          },
          posts: [{
            _id: 'fake-id',
            photoUrl: 'image-url',
            filter: 'instagram-filter',
            description: 'awesome description'
          }]
        }
        const expectedToken = 'fake-token'
        
        const profilePage = await userService.getProfilePage(null, HttpClientModule, authServiceModule)

        expect(HttpClientModule).toHaveBeenCalledTimes(1)
        expect(authServiceModule).toHaveBeenCalledTimes(1)
        expect(authServiceModule().getToken()).toBe(expectedToken)
        expect(profilePage).toEqual(expectedResponseData)
      })
    })

    describe('when token is invalid', () => {
      it('throws an error', async () => {
        expect.assertions(1)
        
        try {
          await userService.getProfilePage(null, HttpClientModule)
        } catch (error) {
          expect(error).toMatchSnapshot()
        }
      })
    })
  })
})
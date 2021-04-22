import {authService} from './authService'

const expectedToken = 'fake-token'

const HttpClientModule = jest.fn()
const parseCookiesModule = jest.fn()

parseCookiesModule.mockImplementation(() => ({
  LOGIN_COOKIE_APP_TOKEN: 'fake-token',
}))

const jwtModule = {
  decode: jest.fn(),
}

const loginServiceModule = {
  logout: jest.fn(),
}

describe('authService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getToken()', () => {
    describe('when user try to get token', () => {
      it('return a valid token', async () => {
        const auth = authService(null, parseCookiesModule)
        const token = await auth.getToken()

        expect(parseCookiesModule).toHaveBeenCalledTimes(1)
        expect(parseCookiesModule).toHaveBeenCalledWith(null)

        expect(token).toBe(expectedToken)
      })
    })
  })

  describe('hasActiveSession()', () => {
    describe('when user try to authenticate', () => {
      it('return true when authentication succeeded', async () => {
        HttpClientModule.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              authenticated: true,
            },
          }),
        )

        const auth = authService()
        const hasActiveSession = await auth.hasActiveSession(HttpClientModule)

        expect(HttpClientModule).toHaveBeenCalledTimes(1)
        expect(hasActiveSession).toBe(true)
      })

      it('return false when authentication fails and logout the user', async () => {
        HttpClientModule.mockImplementationOnce(() =>
          Promise.resolve({
            data: {
              authenticated: false,
            },
          }),
        )

        const auth = authService()
        const hasActiveSession = await auth.hasActiveSession(
          HttpClientModule,
          loginServiceModule,
        )

        expect(loginServiceModule.logout).toHaveBeenCalledTimes(1)
        expect(hasActiveSession).toBe(false)
      })
    })

    describe('when not valid', () => {
      it('return false and logout the user', async () => {
        HttpClientModule.mockImplementationOnce(() => Promise.reject(''))

        const auth = authService()
        const hasActiveSession = await auth.hasActiveSession(
          HttpClientModule,
          loginServiceModule,
        )

        expect(loginServiceModule.logout).toHaveBeenCalledTimes(1)
        expect(hasActiveSession).toBeFalsy()
      })
    })
  })

  describe('getSession()', () => {
    describe('when logged in', () => {
      it('return user session', async () => {
        const expectedUserData = {
          id: 'user-id',
          username: 'username',
          role: ['user'],
        }

        jwtModule.decode.mockImplementationOnce(() => ({
          user: {
            id: 'user-id',
            username: 'username',
            role: ['user'],
          },
        }))

        const session = await authService(null, parseCookiesModule).getSession(
          jwtModule,
        )

        expect(jwtModule.decode).toHaveBeenCalledTimes(1)
        expect(jwtModule.decode).toHaveBeenCalledWith(expectedToken)
        expect(session).toEqual(expectedUserData)
      })
    })
  })
})

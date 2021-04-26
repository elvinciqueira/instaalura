import {Button} from './index'
import theme from '../../../theme'
import {render, screen} from '../../../infra/test/testUtils'
import get from 'lodash/get'

describe('<Button />', () => {
  test('render with no props', () => {
   render(<Button>BUTTON</Button>)

   const button = screen.getByText('BUTTON')

   expect(button).toMatchSnapshot()
   expect(button).toHaveStyleRule('border-radius', theme.borderRadius)
  })

  test('render correctly when disabled', () => {
    render(<Button disabled>BUTTON</Button>)

    const button = screen.getByText('BUTTON')

    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    })
    expect(button).toHaveStyleRule('opacity', '0.2', {
      modifier: ':disabled',
    })
  })

  test('fullWidth prop sets width 100%', () => {
    render(<Button fullWidth>BUTTON</Button>)

    const button = screen.getByText('BUTTON')
    
    expect(button).toHaveStyleRule('width', '100%')
  })

  describe('button variations', () => {
    describe('when ghost prop is NOT set', () => {
      test('render correctly button default', () => {
        const variant = "primary.main"
        render(<Button type="button" variant={variant} >BUTTON</Button>)

        const button = screen.getByText(/button/i)

        expect(button).toHaveStyleRule('background-color', get(theme, `colors.modes.light.${variant}.color`))
        expect(button).toHaveStyleRule('color', get(theme, `colors.modes.light.${variant}.contrastText`))
      })
    })

    describe('when ghost props is set', () => {
      test('render correctly ghost button', () => {
        const variant = "secondary.main"
        render(<Button type="button" ghost variant={variant} >BUTTON</Button>)

        const button = screen.getByText(/button/i)

        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('color', get(theme, `colors.modes.light.${variant}.color`))
      })
    })
  })

  describe('link variant', () => {
    test('render correctly when href props is set', () => {
      render(<Button href="/">LINK</Button>)

      const link = screen.getByRole('link', { name: /link/i })

      expect(link).toBeInTheDocument()
    })
  })
})
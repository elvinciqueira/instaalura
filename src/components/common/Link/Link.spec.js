import {Link} from './'
import {render, screen} from '../../../infra/test/testUtils'
import theme from '../../../theme'

describe('<Link />', () => {
  test('render correctly with default style', () => {
    render(<Link href="/">link</Link>)
    
    const link = screen.getByRole('link', { name: /link/i})

    expect(link).toBeInTheDocument()
    expect(link).toHaveStyleRule('color', 'inherit')
    expect(link).toHaveStyleRule('text-decoration', 'none')
    expect(link).toHaveStyleRule('opacity', '1')
    expect(link).toHaveStyleRule('transition', `opacity ${theme.transition}`)
    expect(link).toHaveStyleRule('opacity', '0.5', {
      modifier: ':hover'
    })
  })
})
import React from 'react'
import {render, screen} from '../../../infra/test/testUtils'
import Typography from './index'

describe('<Typography />', () => {
  describe('text variants', () => {
    describe('when variant="title"', () => {
      test('renders with proper font-size', () => {
        const tree = rendererCreateWithTheme(
          <Typography variant="title" />,
        ).toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('font-size', '32px')
        expect(tree).toHaveStyleRule('font-weight', '700')
        expect(tree).toHaveStyleRule('line-height', '1.25')
      })
    })

    describe('when passing a href prop', () => {
      test('it renders as a anchor element', () => {
        render(<Typography href="/">LINK</Typography>)

        const link = screen.getByRole('link', {name: /link/i})

        expect(link).toBeInstanceOf(HTMLAnchorElement)
        expect(link).toBeInTheDocument()
      })
    })

    describe('when compoenet renders without variant props', () => {
      test('it applies default styles', () => {
        const tree = rendererCreateWithTheme(<Typography />).toJSON()

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('font-size', '16px')
        expect(tree).toHaveStyleRule('font-weight', '400')
        expect(tree).toHaveStyleRule('line-height', '1.25')
      })
    })
  })

  test('textAlign props sets text-align', () => {
    const tree = rendererCreateWithTheme(
      <Typography textAlign="center" />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('text-align', 'center')
  })

  test('marginTop, marginRight, marginBottom, marginLeft', () => {
    const tree = rendererCreateWithTheme(
      <Typography
        marginTop="10px"
        marginLeft="20px"
        marginRight="20px"
        marginBottom="10px"
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-top', '10px')
    expect(tree).toHaveStyleRule('margin-left', '20px')
    expect(tree).toHaveStyleRule('margin-right', '20px')
    expect(tree).toHaveStyleRule('margin-bottom', '10px')
  })
})

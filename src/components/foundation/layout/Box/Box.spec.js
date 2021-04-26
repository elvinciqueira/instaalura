import {Box} from './'
import theme from '../../../../theme'
import get from 'lodash/get'

describe('<Box />', () => {
  test('renders', () => {
    const box = rendererCreateWithTheme(<Box />).toJSON()
    expect(box).toMatchSnapshot()
  })

  test('backgroundImage, backgroundPosition, backgroundSize, backgroundRepeat', () => {
    const box = rendererCreateWithTheme(
      <Box 
        backgroundImage="url(some-image)" 
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      />
    ).toJSON()

    expect(box).toMatchSnapshot()
    expect(box).toHaveStyleRule('background-repeat', 'no-repeat')
    expect(box).toHaveStyleRule('background-image', 'url(some-image)')
    expect(box).toHaveStyleRule('background-size', 'cover')
    expect(box).toHaveStyleRule('background-position', 'center')
  })

  test('marginTop, marginRight, marginBottom, marginLeft', () => {
    const box = rendererCreateWithTheme(
      <Box 
        marginTop="10px" 
        marginLeft="20px"
        marginRight="20px"
        marginBottom="10px"
      />
    ).toJSON()

    expect(box).toMatchSnapshot()
    expect(box).toHaveStyleRule('margin-top', '10px')
    expect(box).toHaveStyleRule('margin-left', '20px')
    expect(box).toHaveStyleRule('margin-right', '20px')
    expect(box).toHaveStyleRule('margin-bottom', '10px')
  })

  test('flex props set flex', () => {
    const box = rendererCreateWithTheme(
      <Box 
        flex={1}
      />
    ).toJSON()

    expect(box).toMatchSnapshot()
    expect(box).toHaveStyleRule('flex', '1')
  })

  test('padding props sets padding', () => {
    const box = rendererCreateWithTheme(<Box padding="12px 16px" />).toJSON()

    expect(box).toMatchSnapshot()
    expect(box).toHaveStyleRule('padding', '12px 16px')
  })

  test('color props sets color', () => {
    const variant = "primary.main"
    const box = rendererCreateWithTheme(
      <Box 
        color={variant}
      />
    ).toJSON()

    expect(box).toMatchSnapshot()
    expect(box).toHaveStyleRule('color', get(theme, `colors.modes.${theme.mode}.${variant}.color`))
  })

  test('borderRadiusTheme props sets theme border-radius', () => {
    const box = rendererCreateWithTheme(<Box borderRadiusTheme />).toJSON()

    expect(box).toMatchSnapshot()
    expect(box).toHaveStyleRule('border-radius', theme.borderRadius)
  })

  test('boxShadow props set box-shadow', () => {
    const box = rendererCreateWithTheme(
      <Box 
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
      />
    ).toJSON()

    expect(box).toMatchSnapshot()
    expect(box).toHaveStyleRule('box-shadow', '-10px 0px 24px rgba(7,12,14,0.1)')
  })
})
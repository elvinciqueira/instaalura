import {Flex} from './'

describe('<Flex />', () => {
  test('renders', () => {
    const flex = rendererCreateWithTheme(<Flex />).toJSON()
    expect(flex).toMatchSnapshot()
  })

  test('alignItems props set align-items', () => {
    const flex = rendererCreateWithTheme(<Flex alignItems="center" />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'center')
  })

  test('justifyContent props set justify-content', () => {
    const flex = rendererCreateWithTheme(
      <Flex justifyContent="center" />,
    ).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('justify-content', 'center')
  })

  test('flexWrap props set flex-wrap', () => {
    const flex = rendererCreateWithTheme(<Flex flexWrap="wrap" />).toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('flex-wrap', 'wrap')
  })
})

import styled from 'styled-components'
import {propToStyle} from '../../../../theme/utils/propToStyle'
import Bubbles from '../../../../theme/Bubbles'
import get from 'lodash/get'

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('width')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('position')}
  ${propToStyle('cursor')}
  ${propToStyle('top')}
  ${propToStyle('right')}
  ${propToStyle('left')}
  ${propToStyle('bottom')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  
  ${({theme, color}) =>
    color &&
    `color: ${get(theme, `colors.modes.${theme.mode}.${color}.color`)}`};

  ${({theme, borderRadiusTheme}) =>
    borderRadiusTheme && `border-radius: ${theme.borderRadius}`};

  ${({theme, backgroundImageTheme}) =>
    backgroundImageTheme &&
    `background-image: url(${Bubbles.url(theme.mode)})`};
`

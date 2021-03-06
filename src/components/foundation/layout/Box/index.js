import styled, {css} from 'styled-components'
import {propToStyle} from '../../../../theme/utils/propToStyle'
import Bubbles from '../../../../theme/Bubbles'
import get from 'lodash/get'

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('boxShadow')}
  ${propToStyle('borderRadius')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('width')}
  ${propToStyle('height')}
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

  ${({hover}) =>
    hover &&
    css`
      > div {
        visibility: hidden;
      }

      transition: opacity 0.3s;

      &:hover {
        > div {
          visibility: visible;
        }

        opacity: 0.6;
      }
    `}
`

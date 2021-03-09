import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import get from 'lodash/get'
import {TextStyleVariants} from '../../foundation/Typography'
import {breakPointsMedia} from '../../../theme/utils/breakPointsMedia'
import {propToStyle} from '../../../theme/utils/propToStyle'
import {Link} from '../Link'

const ButtonGhost = css`
  color: ${({theme, variant}) =>
    get(theme, `colors.modes.light.${variant}.color`)};
  background-color: transparent;
`

const ButtonDefault = css`
  color: ${({theme, variant}) =>
    get(theme, `colors.modes.${theme.mode}.${variant}.contrastText`)};
  background-color: ${({theme, variant}) =>
    get(theme, `colors.modes.${theme.mode}.${variant}.color`)};
`

const ButtonBase = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({theme}) => theme.transition};
  border-radius: ${({theme}) => theme.borderRadius};
  ${({ghost}) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${({fullWidth}) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${breakPointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1};
    `,
  })}
`

export const Button = ({href, ...props}) => {
  const isLink = Boolean(href)
  const componentTag = isLink ? Link : 'button'

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonBase as={componentTag} href={href} {...props} />
  )
}

Button.defaultProps = {
  href: undefined,
}

Button.propTypes = {
  href: PropTypes.string,
}

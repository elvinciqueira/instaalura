import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {propToStyle} from '../../../theme/utils/propToStyle'

const paragraph1 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`

const smallestException = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`

const title = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  title,
}

const TextBase = styled.span`
  ${({variant}) => TextStyleVariants[variant]}
  color: ${({theme, color}) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
`

export default function Typography({tag, variant, children, ...rest}) {
  return (
    <TextBase as={tag} variant={variant} {...rest}>
      {children}
    </TextBase>
  )
}

Typography.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['paragraph1', 'smallestException', 'title']),
}

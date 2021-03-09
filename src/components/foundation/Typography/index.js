import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {propToStyle} from '../../../theme/utils/propToStyle'
import {Link} from '../../common/Link'

const paragraph1 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`

const subTitle = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    line-height: ${theme.typographyVariants.subTitle.lineHeight};
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

const titleXS = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
`

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  title,
  titleXS,
  subTitle,
}

const TextBase = styled.span`
  ${({variant}) => TextStyleVariants[variant]}
  color: ${({theme, color}) =>
    get(theme, `colors.modes.${theme.mode}.${color}.color`)};
  ${propToStyle('textAlign')}
`

export default function Typography({tag, variant, children, href, ...rest}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </TextBase>
    )
  }

  return (
    <TextBase as={tag} variant={variant} {...rest}>
      {children}
    </TextBase>
  )
}

Typography.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
}

Typography.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'p',
    'li',
    'a',
    'span',
    'input',
  ]),
  variant: PropTypes.oneOf([
    'paragraph1',
    'smallestException',
    'title',
    'subTitle',
  ]),
}

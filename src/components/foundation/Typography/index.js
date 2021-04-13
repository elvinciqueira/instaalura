import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {propToStyle} from '../../../theme/utils/propToStyle'
import {Link} from '../../common/Link'
import {TextStyleVariants} from './TextStyleVariants'
import {WebsitePageContext} from '../../wrappers/WebsitePage/context'

export {TextStyleVariants} from './TextStyleVariants'

const TextBase = styled.span`
  ${({variant}) => TextStyleVariants[variant]}
  color: ${({theme, color}) => {
    return get(theme, `colors.modes.${theme.mode}.${color}.color`)
  }};
  ${propToStyle('textAlign')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginLeft')}
`

export default function Typography({
  tag,
  variant,
  children,
  href,
  cmsKey,
  ...rest
}) {
  const websitePageContext = React.useContext(WebsitePageContext)

  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children

  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {componentContent}
      </TextBase>
    )
  }

  return (
    <TextBase as={tag} variant={variant} {...rest}>
      {componentContent}
    </TextBase>
  )
}

Typography.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  cmsKey: undefined,
}

Typography.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  cmsKey: PropTypes.string,
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
    'paragraph2',
    'smallestException',
    'title',
    'titleXS',
    'subTitle',
  ]),
}

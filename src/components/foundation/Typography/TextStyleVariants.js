import {css} from 'styled-components'

const paragraph1 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`

const paragraph2 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${theme.typographyVariants.paragraph2.lineHeight};
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
  paragraph2,
  title,
  titleXS,
  subTitle,
}

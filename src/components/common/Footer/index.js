import React from 'react'
import styled from 'styled-components'
import AluraLogo from '../../../theme/AluraLogo'
import get from 'lodash/get'

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;

  svg {
    width: 58px;
    margin-right: 23px;
  }

  p {
    color: ${({theme}) =>
      get(theme, `colors.modes.${theme.mode}.tertiary.light.color`)};
  }

  a {
    color: ${({theme}) => {
      const {mode: currentMode} = theme

      return theme.colors.modes[currentMode].primary.main.color
    }};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <AluraLogo />
      </a>
      <p>
        Orgulhosamente criado durante o{' '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterWrapper>
  )
}

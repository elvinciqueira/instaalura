import React from 'react'
import {MenuWrapper} from './styles/MenuWrapper'
import {Logo} from '../../../theme/Logo'
import {Button} from '../Button'

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {[
          {url: '/', name: 'Home'},
          {url: '/faq', name: 'Perguntas Frequentes'},
          {url: '/sobre', name: 'Sobre'},
        ].map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

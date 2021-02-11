import React from 'react'
import {MenuWrapper} from './styles/MenuWrapper'
import {Logo} from '../../../theme/Logo'
import {Button} from '../Button'
import Typography from '../../foundation/Typography'

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
        ].map(({url, name}) => (
          <li key={url}>
            <Typography variant="smallestException" tag="a" href={url}>
              {name}
            </Typography>
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

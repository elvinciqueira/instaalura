import {MenuWrapper} from './styles/MenuWrapper'
import {Logo} from '../../../theme/Logo'

const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Perguntas Frequentes',
    url: '/faq',
  },
  {
    name: 'sobre',
    url: '/sobre',
  },
]

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(({name, url}) => (
          <li key={url}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>Area dos botoes(Direita)</MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

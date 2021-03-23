import React from 'react'
import PropTypes from 'prop-types'
import {MenuWrapper} from './styles/MenuWrapper'
import {Logo} from '../../../theme/Logo'
import {Button} from '../Button'
import {IconButton} from '../IconButton'
import Typography from '../../foundation/Typography'
import {BrightnessLightIcon} from '../../../theme/Icons/BrightnessLightIcon'
import {BrightnessDarkIcon} from '../../../theme/Icons/BrightnessDarkIcon'
import {useTheme} from '../../../infra/hooks/theme/useTheme'

export default function Menu({onCadastrarClick}) {
  const {toggleTheme, currentMode} = useTheme()

  const handleToggleTheme = () => toggleTheme()

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
            <Typography
              color={
                currentMode === 'light' ? 'tertiary.light' : 'tertiary.main'
              }
              variant="smallestException"
              tag="a"
              href={url}
            >
              {name}
            </Typography>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <IconButton onClick={handleToggleTheme}>
          {currentMode === 'light' ? (
            <BrightnessDarkIcon />
          ) : (
            <BrightnessLightIcon />
          )}
        </IconButton>
        <Button type="button" ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button type="button" variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
}

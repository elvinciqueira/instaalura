import React from 'react'
import {MenuWrapper} from './styles/MenuWrapper'
import {Logo} from '../../../theme/Logo'
import {Button} from '../Button'
import {IconButton} from '../IconButton'
import Typography from '../../foundation/Typography'
import {BrightnessLightIcon} from '../../../theme/Icons/BrightnessLightIcon'
import {BrightnessDarkIcon} from '../../../theme/Icons/BrightnessDarkIcon'
import {useContext} from '../../../../pages/_app'

export default function Menu() {
  const {setCurrentMode, theme} = useContext()

  const handleChangeTheme = () => {
    if (theme.currentTheme === 'light') {
      setCurrentMode((currentMode) => ({
        ...currentMode,
        colors: theme.modes.dark,
        currentTheme: 'dark',
      }))
    } else {
      setCurrentMode((currentMode) => ({
        ...currentMode,
        colors: theme.modes.light,
        currentTheme: 'light',
      }))
    }
  }

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
        <IconButton onClick={handleChangeTheme}>
          {theme.currentTheme === 'light' ? (
            <BrightnessLightIcon />
          ) : (
            <BrightnessDarkIcon />
          )}
        </IconButton>
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

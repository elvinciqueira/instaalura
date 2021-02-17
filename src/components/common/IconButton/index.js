import React from 'react'

import styled, {css} from 'styled-components'

const StyledIconButton = styled.button(({theme}) => {
  return css`
    width: 36px;
    height: 26px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  `
})

export function IconButton({children, ...props}) {
  return <StyledIconButton {...props}>{children}</StyledIconButton>
}

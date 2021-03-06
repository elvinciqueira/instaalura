import React from 'react'
import PropTypes from 'prop-types'
import styled, {css, createGlobalStyle} from 'styled-components'
import {motion} from 'framer-motion'
import {Box} from '../../foundation/layout/Box'

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;

  ${({isOpen}) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `
  }}
`

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

function Modal({isOpen, onClose, children}) {
  const CloseButton = () => (
    <Box
      position="absolute"
      top={{
        xs: '30px',
        md: '30px',
      }}
      right={{
        xs: '40px',
        md: '30px',
      }}
      onClick={() => onClose()}
      cursor="pointer"
    >
      <img src="/images/close.svg" alt="bot de fechar" />
    </Box>
  )

  const variants = {
    open: {x: 0},
    closed: {x: '100%'},
  }

  const handleOnClick = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]')

    if (!isSafeArea) {
      onClose()
    }
  }

  return (
    <ModalWrapper isOpen={isOpen} onClick={handleOnClick}>
      {isOpen && <LockScroll />}

      <motion.div
        variants={variants}
        transition={{duration: 0.6}}
        animate={isOpen ? 'open' : 'closed'}
        style={{display: 'flex', flex: 1}}
      >
        {children({
          'data-modal-safe-area': 'true',
          CloseButton,
        })}
      </motion.div>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal

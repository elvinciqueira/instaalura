import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Typography from '../../foundation/Typography'

const InputWrapper = styled.div`
  margin-bottom: 17px;
`

const Input = styled(Typography)`
  width: 100%;
  background-color: ${({theme}) =>
    theme.colors.modes[theme.mode].background.light.color};
  border: 1px solid #d4d4d4;
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({theme}) => theme.borderRadius};
`

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
  type: 'text',
}

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  type,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
    </InputWrapper>
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

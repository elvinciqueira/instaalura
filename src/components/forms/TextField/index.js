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
    theme.colors.modes[theme.mode].background.main.color};
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
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error)
  const isFieldInvalid = hasError && isTouched

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

      {isFieldInvalid && (
        <Typography variant="smallestException" color="error.main" role="alert">
          {error}
        </Typography>
      )}
    </InputWrapper>
  )
}

TextField.defaultProps = {
  error: '',
  isTouched: false,
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

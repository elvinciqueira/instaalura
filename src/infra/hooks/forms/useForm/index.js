import {useState} from 'react'

const useForm = ({initialState, onSubmit}) => {
  const [values, setValues] = useState(initialState)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    onSubmit(values)
  }

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name')
    const {value} = event.target

    setValues((values) => ({
      ...values,
      [fieldName]: value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export default useForm

import {useState} from 'react'

const useForm = (callback) => {
  const [values, setValues] = useState({
    username: '',
    name: '',
  })

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    callback()
  }

  const handleChange = (event) => {
    event.persist()
    const fieldName = event.target.getAttribute('name')

    setValues((values) => ({
      ...values,
      [fieldName]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export default useForm

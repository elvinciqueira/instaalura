import {useState, useEffect} from 'react'

const useForm = ({initialState, onSubmit, validateSchema}) => {
  const [values, setValues] = useState(initialState)
  const [isFormDisabled, setIsFormDisabled] = useState(true)
  const [errors, setErrors] = useState({})
  const [touched, setTouchedFields] = useState({})

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues)
      setErrors({})
      setIsFormDisabled(false)
    } catch (err) {
      const formatedErrors = err.inner.reduce(
        (errorObjectAcc, currentError) => {
          const fieldName = currentError.path
          const errorMessage = currentError.message
          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage,
          }
        },
        {},
      )
      setErrors(formatedErrors)
      setIsFormDisabled(true)
    }
  }

  useEffect(() => {
    validateValues(values)
  }, [values])

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

  const handleBlur = (event) => {
    const fieldName = event.target.getAttribute('name')

    setTouchedFields({
      ...touched,
      [fieldName]: true, // usuario: true, senha: true ...
    })
  }

  return {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    // Validação do Form
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
  }
}

export default useForm

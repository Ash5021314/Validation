import React, {useState} from 'react'
import './Validation.css'
import Validate from './Response'

const Validator = () => {
  const [save, setSave] = useState({
    firstName: '',
    userAge: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const rules = {
    // firstName: 'string',
    firstName: 'capitalize|required|string',
    userAge: 'number',
    email: 'email',
    phone: 'phone'
  }
  let userData = {}, response
  userData = save
  const onSubmit = (e) => {
    e.preventDefault()
    response = Validate(userData, rules)
    setErrors(response.invalidFields)
    setSubmitted(true)
  }
  const onChange = (event) => {
    setSave({
      ...save,
      [event.target.name]: event.target.value
    })
  }

  const isEmptyObject = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false
    }
    return true
  }

  return (
    <>
      <form className='formClass' onSubmit={onSubmit}>
        {errors.firstName && <p className='firstName'>{errors.firstName}</p>}
        <input type="text" name='firstName' placeholder='Name' onChange={onChange}/>
        {errors.userAge && <p>{errors.userAge}</p>}
        <input type="text" name='userAge' placeholder='Age' onChange={onChange}/>
        {errors.email && <p>{errors.email}</p>}
        <input type="text" name='email' placeholder='Email' onChange={onChange}/>
        {errors.phone && <p>{errors.phone}</p>}
        <input type="text" name='phone' placeholder='+37499999999' onChange={onChange}/>
        {isEmptyObject(errors) && submitted && 'maladec'}
        <input type="submit"/>
      </form>
    </>
  )
}

export default Validator
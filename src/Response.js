import React from 'react'

const checkString = (attr) => {
  if (!attr.match(/^[a-zA-Z]*$/)) {
    return {success: false, message: 'field must contain only string characters'}
  } else {
    return {success: true}
  }
}

const checkNumber = (attr) => {
  if (!attr.match(/^-?\d*\.?\d*$/)) {
    return {success: false, message: 'field must contain only number characters'}
  } else {
    return {success: true}
  }
}
const checkMail = (attr) => {
  if (!attr.match(/^([a-zA-Z0-9_/.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/)) {
    return {success: false, message: 'field is not in valid mail format'}
  } else {
    return {success: true}
  }
}
const checkPhone = (attr) => {
  if (!attr.match(/^\+?[(]?[0-9]{3}[)]?[-\s/.]?[0-9]{3}[-\s/.]?[0-9]{5,6}$/)) {
    return {success: false, message: 'field is not in valid phone number'}
  } else {
    return {success: true}
  }
}

const getErrors = (data, rule) => {
  switch (rule) {
    case 'string':
      console.log(rule)
      // check if is test
      return checkString(data)
    case 'number':
      // check another test
      return checkNumber(data)
    case 'email':
      return checkMail(data)
    case 'phone':
      return checkPhone(data)
    default:
      return
  }
}
const Validate = (data, rules) => {
  let validation = {
    success: true,
    invalidFields: {}
  }
  for (const key in rules) {
    // let splitResult = rules[key].split('|')

    // splitResult.map((item) => {
    for (let item in key) {
      console.log(key[item])

    }
    // if (!rules.hasOwnProperty(key) || !data.hasOwnProperty(key)) {
    //   continue
    // }
    const result = getErrors(data[key], rules)
    //
    // })
    // if (!result.success) {
    //   validation.success = false
    //   validation.invalidFields[key] = result.message
    // }
  }

  return validation
}

export default Validate
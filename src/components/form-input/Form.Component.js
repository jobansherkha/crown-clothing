import React from 'react'

import'./form-input.scss'

export const Form = ({label, ...otherProps}) => {
  return (
    <div className='group'>
    <input className='form-input' {...otherProps} />
    {label && (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
  )
}

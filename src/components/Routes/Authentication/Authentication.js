import { SignUp } from '../../SignUp/SignUp'
import { SignIn } from '../SignIn/SignIn'
import './Authentication.scss'
import React from 'react'
export const Authentication = () => {
  return (
    <>

<div className='authentication-container'>
      <SignIn />
      <SignUp/>
    </div>
    </>
  )
}

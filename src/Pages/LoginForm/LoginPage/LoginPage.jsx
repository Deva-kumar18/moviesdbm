import React from 'react'
import LoginForm from '../LoginForm'
import Back from '../../../Assets/background.jpg'

const LoginPage = () => {
  return (
    <div className='lp-container' >
      <img src={Back} className='b-image'/><LoginForm/></div>
  )
}

export default LoginPage
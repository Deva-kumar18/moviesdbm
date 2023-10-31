import React from 'react'
import LoginForm from '../LoginForm'
import Back from '../../../Assets/background.jpg'

const LoginPage = () => {
  return (
    <div className='lp-container' style={{ backgroundImage: `url(${Back})` }}><LoginForm/></div>
  )
}

export default LoginPage
import React from 'react'
import { Link } from 'react-router-dom'
const Button = () => {
  return (
    <div className='container'>
      <Link to='/content'>

        <button className="neumorphic-button">Click me</button>
 
      </Link>
    </div>
  )
}

export default Button
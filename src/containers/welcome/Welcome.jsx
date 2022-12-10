import React from 'react'
import { Navbar } from '../../components'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='Container'>
        <Navbar />
        <main className='Welcome-Container'>
        <div className = 'Main'>
            <div className = 'Main-Header'>
            <h1>Welcome</h1>
            </div>

            <div className = 'Main-Body'>
            <div className = 'Main-Body-Item'>
                
            </div>
            </div>
        </div>
        </main>
    </div>
  )
}

export default Welcome
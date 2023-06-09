import React from 'react'
import './landing.css'

export const Landing = () => {
  return (
    <section id='landing'>
        <div id='landing-page-text'>
            <h1 className='landing-title'>
                Meet Leonardo.Ai
            </h1>
            <h2 className='landing-sub-title'>
                Create stunning game 
            </h2>
            <p className='landing-paragraf'>
                Signup for exclusive early-bird access:
            </p>
        </div>
        <div id='landing-button-input'>
            <input type="text" placeholder='Email' id ='landing-input'/>
            <button className='button-count'>count me in</button>
        </div>
    </section>
  )
}

import React from 'react'
import { SignUpButton } from '../../helpers/SignUpButton'
// import BG from '../../temporal-utils/main.jpg'
import '../../styles/hero/hero.css'
export const Hero = () => {
  return (
    <main>
      {/* <img src={ BG } alt=""/> */}
      <div className="hero__background"></div>
      <p className="main--text">Find the info of your favorites movies</p>
      <p className="second--text">Thousands and thousands you can check right now</p>
      < SignUpButton />
    </main>
  )
}

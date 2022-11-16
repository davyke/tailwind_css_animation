import React from 'react'
import img from "../assets/images/drive.jpg"

function Hero() {
  return (
    <div className="w-[100] overflow-hidden perspective-9">
        <img  src={img} alt="nothing" className="animate-wiggle forwards relative"/>
        <h1 className="absolute  sm:top-[10%]  xxs:top-[10%] md:top-[20%] z-77 md:text-5xl sm:text-xl md:font-medium sm:font-bold xxs:font-bold left-4 font-body text-white animate-banner forwards"> Dicover the power Drive in Mzda</h1>
        <p className="absolute  z-78 white sm:top-[20%] xxs:top-[13%] md:top-[30%] text-white font-normal sm:w-[80%] md:w-[70%]  font-body left-4 sm:text-l md:text-2xl animate-banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta elementum rhoncus. Pellentesque sagittis scelerisque leo</p>
        <button className="absolute bg-blue-700  sm:py-2 md:py-5 sm:text-base sm:px-5 xxs:px-5  md:px-8 rounded text-white left-4 sm:top-46 md:top-[42%]  z-77 top-56 animate-bounce"> Order Now </button>
    </div>
  )
}

export default Hero
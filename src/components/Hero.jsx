import React from 'react'
import heroVid from '../assets/video.mp4'
import E from "../assets/e.svg"

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
        <video className="object-cover h-full w-full absolute -z-10" src={heroVid} autoPlay loop muted/>
        <div className="w-full h-[90%] flex flex-col justify-center items-center text-white">
            <h1>Decentralized</h1>
            <h1><span className='blue'>Trading Protocol</span></h1>
            <p className='text-xl py-4'>Guranteed liquidity trading for millions of users and top 
                <span className="inline-flex items-baseline">
                    <img src={E} className="self-center w-5 h-5 rounded-full mx-1"/>
                    <span>Etherum..</span>
                    <span>application</span>
                </span>
                  </p>
            <div>
               <button className='m-5'>Use Me</button>
               <button className="bg-transparent">FAQ</button>
            </div>
        </div>
        <div>
          <p className="text-center text-white text-2xl">Total Volume Secured: $42,104,783,662.47</p>
        </div>
       
    </div>
  )
}

export default Hero
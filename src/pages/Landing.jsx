import React, { useState } from 'react'
import logo from '../assets/MYPORTIFY_1.png'
import gif from '../assets/Portify.gif'
import { FaLinkedin, FaFacebook } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import DinoGame from 'react-chrome-dino-ts'
import 'react-chrome-dino-ts/index.css'

export default function Landing() {
  const [showGame, setShowGame] = useState(false);
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubscribe = () => {
    setIsDisabled(true); // Disable the button after click
  };

  const handlePlayClick = () => {
    setShowGame(true);
  };

  return (
    <div>
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <a className="flex items-center text-gray-900 md:mb-0 size-28 md:size-[200px]">
          <img src={logo} />
        </a>
        <div className="flex items-center md:hidden mr-2">
          <div className="flex space-x-8">
            <div className="bg-white rounded-full p-2 shadow-md md:w-[54] h-[54]">
              <FaLinkedin className="text-violet-950" size={25} />
            </div>
            <div className="bg-white rounded-full p-2 shadow-md md:w-[54] h-[54]">
              <AiFillInstagram className="text-violet-950" size={25} />
            </div>
            <div className="bg-white rounded-full p-2 shadow-md md:w-[54] h-[54]">
              <FaFacebook className="text-violet-950" size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:px-5 md:gap-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0">
          <div className='flex items-center gap-2 font-[Poppins] md:text-2xl text-xl md:font-[600] font-semibold md:mb-4 mb-1 ml-8 md:ml-0'>
            <div className='md:w-[59.135px] w-[36px] h-[2.5px] bg-black md:mr-2 inline-block '></div>
            <div className='text-[#444] inline-block'>COMING SOON</div>
          </div>
          <h1 className="hidden md:inline sm:text-4xl leading-5 font-extrabold  mb-4 font-[Poppins] text-black">GET NOTIFIED <br/>
            WHEN WE WILL LAUNCH!</h1>
          <h1 className="md:hidden text-3xl font-black mb-4 font-[Poppins] text-black ml-9">GET NOTIFIED <br />
            WHEN WE WILL <br/> LAUNCH!</h1>
          <div className="mr-auto hidden md:flex flex-col items-center mt-12">
            <div className="flex items-center border border-black rounded-full pl-2 pr-1 md:w-[588px] md:h-[62px]">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 outline-none rounded-full"
              />
              <button 
              onClick={handleSubscribe}
              disabled={isDisabled || !email}
              className={`bg-black text-white px-6 py-2 rounded-full md:w-[198px] md:h-[53px] ${
                isDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}>
                Subscribe
              </button>
            </div>
          </div>
          <p className="hidden md:inline text-xs font-[Poppins] font-medium text-black mt-4 ml-4">
            *Don't worry we will not spam you :)
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src={gif} />
        </div>
        <div className="md:hidden flex flex-col items-center mt-8">
            <div className="flex items-center border border-black rounded-full w-[315.317px] h-[46.282px] md:w-[588px] md:h-[62px]">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 outline-none rounded-full"
              />
              <button 
              onClick={handleSubscribe}
              disabled={isDisabled || !email}
              className={`bg-black text-white px-6 py-2 absolute ml-[205px] rounded-full w-[106.178px] h-[39.563px] md:w-[198px] md:h-[53px] ${
                isDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}>
                Subscribe
              </button>
            </div>
          </div>
          <p className="md:hidden text-xs font-[Poppins] font-medium text-black mt-4 ml-4 mb-8">
            *Don't worry we will not spam you :)
          </p>
      </div>
      <div className="container mx-auto pl-6 flex flex-col md:items-start items-center space-y-4 md:mb-14">
        <h2 className="text-black font-semibold text-3xl">
          Play a Game while you wait :)
        </h2>
        <button onClick={handlePlayClick} className="md:w-44 w-64 h-16 bg-gradient-to-r from-purple-950 to-purple-700 text-white text-2xl font-[Poppins] font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          PLAY
        </button>
      </div>

      {showGame && (
        <div className="z-50 flex items-center justify-center">
          <DinoGame className="w-[80] h-[20]"/>
        </div>
      )}

      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center p-4">
        <div className="hidden md:flex items-center">
          <div className="flex space-x-8">
            <div className="bg-white rounded-full p-2 shadow-md md:w-[54] h-[54]">
              <FaLinkedin className="text-violet-950" size={25} />
            </div>
            <div className="bg-white rounded-full p-2 shadow-md md:w-[54] h-[54]">
              <AiFillInstagram className="text-violet-950" size={25} />
            </div>
            <div className="bg-white rounded-full p-2 shadow-md md:w-[54] h-[54]">
              <FaFacebook className="text-violet-950" size={25} />
            </div>
          </div>
        </div>
        <div className="flex space-x-6 md:space-x-20 text-black font-semibold text-sm">
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Email Us
          </a>
        </div>
      </div>
    </div>
  )
}

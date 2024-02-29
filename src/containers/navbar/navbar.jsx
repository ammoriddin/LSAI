import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import React, { useState } from 'react'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'

export default function Navbar() {

    const [darkmode, setDarkmode] = useState(false)

  return (
    <nav className='w-full max-w-[1400px] py-[10px] px-[50px] mx-[auto] flex justify-between items-center'>
        <Link to={'/'} className='w-[150px] relative h-[50px]'>
            <img className='w-full h-full object-cover' src={logo} alt="logo" />
        </Link>
        <ul className='flex gap-8 font-[500] text-[18px]'>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Tutorial</Link>
            </li>
            <li>
                <Link to={'/ccat'}>Create Course & Test</Link>
            </li>
            <li>
                <Link to={'/docs'}>Docs</Link>
            </li>
            <li>
                <Link to={'/statistics'}>Statistics</Link>
            </li>
        </ul>
        <ul className='flex gap-6'>
            <li>
                <Link to={'/login'} className='bg-gray-400 pt-[8px] text-white rounded-lg px-[15px] font-[500] pb-[10px] border-[2px] border-black border-solid'>Login</Link>
            </li>
            <li>
                <Link to={'/signup'} className='bg-gray-400 pt-[8px] text-white rounded-lg px-[15px] font-[500] pb-[10px] border-[2px] border-black border-solid'>Signup</Link>
            </li>
        </ul>
        <div>
            <button onClick={() => {
                setDarkmode(!darkmode)
            }} className={`w-[35px] cursor-pointer ${darkmode === false ? 'block' : "hidden"}`}>
                <img className='w-full' src={moon} alt="" />
            </button>
            
            <button onClick={() => {
                setDarkmode(!darkmode)
            }} className={`w-[35px] cursor-pointer ${darkmode === false ? 'hidden' : "block"}`}>
                <img className='w-full' src={sun} alt="" />
            </button>
        </div>
    </nav>
  )
}
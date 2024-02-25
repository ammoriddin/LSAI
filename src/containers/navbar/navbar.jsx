import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full border-b-[1.5px] max-w-[1400px] py-[20px] px-[50px] mx-[auto] flex justify-between items-center'>
        <Link to={'/'} className='w-[150px] h-[50px]'>
            <img className='w-full h-full object-cover' src={logo} alt="logo" />
        </Link>
        <ul className='flex gap-8 font-[500] text-[18px]'>
            <li>
                <Link>Tutorial</Link>
            </li>
            <li>
                <Link to={'/ccat'}>Create Course & Test</Link>
            </li>
            <li>
                <Link>Docs</Link>
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
    </nav>
  )
}
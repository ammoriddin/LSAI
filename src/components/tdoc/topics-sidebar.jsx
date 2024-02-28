import React from 'react'
import { Link } from 'react-router-dom'

export default function TopicsSidebar() {
  return (
        <div className='border-r-[2px] w-[250px]'>
            <h1 className='text-[30px] font-[600] py-[10px] flex items-center'>Test</h1>

            <ul className='flex mb-[20px] flex-col text-[20px] font-[600]'>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    hello
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    salom
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Bonjour
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Doc
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Reac.js
                </Link>
            </ul>

            <h1 className='text-[30px] font-[600] py-[10px] flex items-center'>Test</h1>

            <ul className='flex mb-[20px] flex-col text-[20px] font-[600]'>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    hello
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    salom
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Bonjour
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Doc
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Reac.js
                </Link>
            </ul>

            <h1 className='text-[30px] font-[600] py-[10px] flex items-center'>Test</h1>

            <ul className='flex  flex-col text-[20px] font-[600]'>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    hello
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    salom
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Bonjour
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Doc
                </Link>
                <Link className='text-gray-600 hover:text-green-500 transition-colors py-[6.5px]'>
                    Reac.js
                </Link>
            </ul>
        </div>
  )
}
import React from 'react'
import logo from '../../assets/logo.jpg'
import { Button, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Singup() {
  return (
    <section className='w-full h-[90vh] flex justify-center items-center'>
        <div className='w-[600px]'>
            <div className='flex mb-4 items-center gap-5 justify-center'>
                <div className='w-[300px] h-[100px]'>
                    <img className='w-full h-full object-cover' src={logo} alt="logo" />
                </div>
                <h1 className='font-[500] text-[35px]'>Signup</h1>
            </div>
            
            <form>
                <div className='mb-4'>
                    <Label htmlFor='username' className='mb-2 cursor-pointer text-[18px]'>Username</Label>
                    <TextInput id='username' name='username' placeholder='usernameingizni kiriting' />
                </div>
                
                <div className='mb-4'>
                    <Label htmlFor='email' className='mb-2 cursor-pointer text-[18px]'>Email</Label>
                    <TextInput type='email' id='email' name='email' placeholder='emailingizni kiriting' />
                </div>

                <div className='mb-4'>
                    <Label htmlFor='password' className='mb-2 cursor-pointer text-[18px]'>Password</Label>
                    <TextInput type='password' id='password' name='password' placeholder='parolingizni kiriting' />
                </div>
                <Button className='px-[10px] mx-auto mb-4'>Ro'yhatdan o'tish</Button>
                <div className='flex justify-center'>
                    <Link to={'/login'} className='text-blue-700 font-[500] underline'>accountingiz bormi?</Link>
                </div>
            </form>
        </div>
    </section>
  )
}
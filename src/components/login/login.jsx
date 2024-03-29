import React from 'react'
import logo from '../../assets/logo.jpg'
import { Button, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section className='w-full h-[90vh] flex justify-center items-center'>
        <div className='w-[600px]'>
            <div className='flex mb-4 items-center gap-5 justify-center'>
                <div className='w-[300px] h-[100px]'>
                    <img className='w-full h-full object-cover' src={logo} alt="logo" />
                </div>
                <h1 className='font-[500] text-[35px]'>Login</h1>
            </div>
            
            <form>
                <div className='mb-4'>
                    <Label htmlFor='username' className='mb-2 cursor-pointer text-[18px]'>Username</Label>
                    <TextInput id='username' name='username' placeholder='username yoki emailingizni kiriting' />
                </div>
                <div className='mb-4'>
                    <Label htmlFor='password' className='mb-2 cursor-pointer text-[18px]'>Password</Label>
                    <TextInput type='password' id='password' name='password' placeholder='parolingizni kiriting' />
                </div>
                <Button className='px-[10px] mx-auto mb-4'>Kirish</Button>
                <div className='flex justify-center'>
                    <Link to={'/forgot-password'} className='text-blue-700 font-[500] text-[15px] underline'>Parolingizni unutdingizmi?</Link>
                </div>
            </form>
        </div>
    </section>
  )
}
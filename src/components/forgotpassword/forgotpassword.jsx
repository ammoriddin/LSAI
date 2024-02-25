import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import { Button, Label, TextInput } from 'flowbite-react'

export default function ForgotPassword() {
    const [display, setDisplay] = useState(true)

    const changeDisplay = () => {
        setDisplay(prev => prev == !prev)
    }

    return (
        <section className='w-full h-[90vh] flex justify-center items-center'>
            <div className='w-[600px]'>
                <div className='flex mb-4 items-center gap-5 justify-center'>
                    <div className='w-[300px] h-[100px]'>
                        <img className='w-full h-full object-cover' src={logo} alt="logo" />
                    </div>
                    <h1 className='font-[500] text-[35px]'>Prolingizni Unitdingizmi?</h1>
                </div>

                <form className={`${display === true ? 'hidden' : "block"} mb-4 flex justify-center flex-col items-center`}>
                    <h1 className='font-[500] text-[25px] mb-4'>Codeni tasdiqlang</h1>
                    <div className="flex mb-2 space-x-2">
                        <div>
                            <label htmlFor="code-1" className="sr-only">First code</label>
                            <input type="text" id="code-1" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg" required />
                        </div>
                        <div>
                            <label htmlFor="code-2" className="sr-only">Second code</label>
                            <input type="text" id="code-2" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg" required />
                        </div>
                        <div>
                            <label htmlFor="code-3" className="sr-only">Third code</label>
                            <input type="text" id="code-3" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg" required />
                        </div>
                        <div>
                            <label htmlFor="code-4" className="sr-only">Fourth code</label>
                            <input type="text" id="code-4" className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg" required />
                        </div>
                    </div>
                    <p id="helper-text-explanation" className="mt-2 mb-4 text-sm text-gray-500">Iltimos, elektron pochta orqali yuborilgan 4 xonali kodni kiriting.</p>
                    <Button className={`mx-auto ${display === true ? 'hidden' : "block"}`}>Tasdiqlash</Button>
                </form>
                
                <form className={`${display !== true ? "hidden" : "block"}`}>
                    <div className='mb-4'>
                        <Label htmlFor='email' className='mb-2 cursor-pointer text-[18px]'>Email</Label>
                        <TextInput id='email' name='email' placeholder='Emailingizni kiriting' />
                    </div>
                    <Button onClick={changeDisplay} className={`mx-auto ${display !== true ? 'hidden' : "block"}`}>Jo'natish</Button>
                </form> 
            </div>
        </section>
    )
}
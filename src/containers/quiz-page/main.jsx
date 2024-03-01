import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuizPage() {
    const navigate = useNavigate()
    const [quizCode, setQuizCode] = useState('')

    return (
        <section>
            <div className='container'>
                <div className='w-full gap-5 h-[80vh] flex items-center justify-center'>
                    <TextInput value={quizCode} onChange={(e) => setQuizCode(e.target.value)} className='w-[50%]' placeholder='Quiz Code' />
                    <Button onClick={() => navigate(`/quiz/${quizCode}`)} className='px-[15px]'>Kirish</Button>
                </div>
            </div>
        </section>
    )
}
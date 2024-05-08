import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function FormSubmitted() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000);
    }, [])
  return (
    <>
        <nav className='flex justify-between mx-4 my-4 py-4 px-4'>
            <img className='brand w-2/12 py-4 px-6' src='/logo.svg' alt="logo"/>
        </nav>
        <section className='block w-1/3 mx-auto'>
            <div className='my-10'>
                <img className='w-16 block mx-auto' src="/CheckMark.svg" alt="Check Mark" />
            </div>
            <div className='text-center'>
                <div className='font-CoveredByYourGrace text-3xl text-[#2DA950]'>Success Submitted</div>
                <div className='font-Manrope text-center text-5xl font-semibold mt-2'>Congratulations</div>
                <div className='text-xl font-medium text-black/40 my-10 text-center'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</div>
            </div>
        </section>
        <footer className='w-full text-black text-center py-4 fixed bottom-0'>
            <div>Redirecting you to Homepage in <span className='font-bold'> 5 Seconds</span></div>
        </footer>
    </>
  )
}

export default FormSubmitted
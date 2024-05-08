import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <header>
            <nav className='flex justify-between border-2 rounded-full mx-4 my-4 py-4 px-4'>
                <div><img className='w-3/4 py-4 px-6' src="/logo.svg" alt="Logo"/></div>
                <ul className='flex justify-around'>
                    <Link to={"/get-projects"}><li className='mx-2 border-2 rounded-full px-4 py-5 font-Manrope cursor-pointer hover:bg-[#F1F1F1] hover:border-[#E8E8E8]'><a href="#">Get Projects</a></li></Link>
                    <li className='mx-2 bg-black text-white rounded-full px-4 py-5 font-Manrope cursor-pointer hover:bg-[#4E4E4E]'><a href="#">Onboard Talent</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar
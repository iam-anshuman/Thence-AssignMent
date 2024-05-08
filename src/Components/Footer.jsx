import React from 'react'

function Footer() {
  return (
    <footer className='my-14 w-[95vw] mx-auto'>
        <div className='flex font-Manrope justify-between h-[15vh] py-12 bg-[#F5F5F5] rounded-3xl'>
            <div className='mx-10'>©Talup 2023. All rights reserved</div>
            <div className='mx-10'>
                <a className='mx-5 underline' href="#">Terms & Condition</a>
                <a className='mx-5 underline' href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
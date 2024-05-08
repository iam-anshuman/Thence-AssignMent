import React from 'react'
import Carousel from './Carousel'

function HeroSection() {
  return (
    <section>
        <div className='my-32 w-11/12 mx-auto'>
            <div className='w-1/3 block mx-auto'>
                <h1 className='text-center font-CoveredByYourGrace text-3xl text-[#2DA950]'>Success Stories</h1>
                <h1 className='text-center font-Manrope text-4xl font-semibold'>Every success journey we’ve encountered.</h1>
            </div>
            <div className='flex my-20 justify-center'>
                <div className="basis-1/2 left-side relative">
                    <img className='rounded-3xl w-3/5 mx-28' src="/Girl_Shocked.png" alt="Girl Image" />
                    <div className='absolute bg-white text-black rounded-3xl w-1/3 p-8 font-Manrope top-20 -left-10'>
                        <h1 className='relative text-5xl font-bold mb-3'>
                            <img className='absolute -top-14 -left-12' src="/sparkle.png" alt="Sparkle" />
                            40%
                        </h1>
                        <p className='text-black/50'>Achieved reduction in project execution time by optimising team availability</p>
                    </div>
                    <div className='absolute rounded-full p-4 bottom-10 left-5 bg-white'>
                        <div className=' flex font-Manrope'>
                                <img className='rounded-full bg-[#DDEFE0] p-2' src="/Rocket.png" alt="Rocket Icon" />
                                <div className='ml-4'>
                                    <h1>10 Days</h1>
                                    <p>Self Development</p>
                                </div>
                        </div>
                    </div>
                    <div className='absolute bg-[#002E18] rounded-3xl w-2/5 p-8 -bottom-14 right-14 font-Manrope text-white'>
                        <div className='text-5xl font-semibold mb-5'>$0.5<span className='ml-4 text-2xl text-[#A6A3A0]'>MILLION</span></div>
                        <div className='text-[#CCCCCC] font-medium text-base'>Reduced client expenses by saving on hiring and employee costs.</div>
                    </div>
                </div>
                <div className="basis-1/3 right-side my-10 ml-5">
                    <Carousel/>
                    <div className='text-white rounded-full mt-36 p-5 bg-black w-1/3'>
                        Explore more →
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
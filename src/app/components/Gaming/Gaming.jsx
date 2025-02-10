import Image from 'next/image'
import React from 'react'

const Gaming = () => {
  return (
    <div className="container lg:px-24 md:px-12 sm:px-0 bg-[#212224] mx-auto py-10 my-10 rounded-md relative">
    <h2 className="px-5 text-4xl font-extrabold  text-white"><span className="underline">Most Popular</span> <span className="text-[#ec6090] ">Right Now</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 py-10">
        <Image src={"/game-01.jpg"} alt='gmae' width={100} height={100}/>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>Dota 2</span>
        <span className='text-[#666666]'>Sandbox</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>
        Date Added</span>
        <span className='text-[#666666]'>24/08/2036</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>Hours Played</span>
        <span className='text-[#666666]'>634 H 22 Mins</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>Currently</span>
        <span className='text-[#666666]'>Downloaded</span>
        </div>
        <button className='rounded-full p-1 text-[#666666] border-2 border-[#666666] h-14'>Downloaded</button>
    </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 py-10">
    <Image src={"/game-02.jpg"} alt='gmae' width={100} height={100}/>
    <div className='flex flex-col'>
    <span className='text-white font-semibold'>Fortnite</span>
    <span className='text-[#666666]'>Sandbox</span>
    </div>
    <div className='flex flex-col'>
    <span className='text-white font-semibold'>
    Date Added</span>
    <span className='text-[#666666]'>24/08/2036</span>
    </div>
    <div className='flex flex-col'>
    <span className='text-white font-semibold'>Hours Played</span>
    <span className='text-[#666666]'>634 H 22 Mins</span>
    </div>
    <div className='flex flex-col'>
    <span className='text-white font-semibold'>Currently</span>
    <span className='text-[#666666]'>Downloaded</span>
    </div>
    <button className='rounded-full p-1 text-[#ec6090] border-2 border-[#ec6090] h-14'>Downloaded</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 py-10">
        <Image src={"/game-03.jpg"} alt='gmae' width={100} height={100}/>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>CS-GO</span>
        <span className='text-[#666666]'>Sandbox</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>
        Date Added</span>
        <span className='text-[#666666]'>24/08/2036</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>Hours Played</span>
        <span className='text-[#666666]'>634 H 22 Mins</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-white font-semibold'>Currently</span>
        <span className='text-[#666666]'>Downloaded</span>
        </div>
        <button className='rounded-full p-1 text-[#666666] border-2 border-[#666666] h-14'>Downloaded</button>
    </div>
        <button className='text-white rounded-full p-5 absolute bg-[#ec6090] left-[50%] translate-x-[-50%]'>View Your Library</button>
    </div>
  )
}

export default Gaming

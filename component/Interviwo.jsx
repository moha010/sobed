import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Interviwo() {
  return (
    <div className='Interviow mt-30 p-10 flex flex-col items-center justify-center'>
      <div className="colll flex justify-between flex-col-reverse md:flex-row lg:flex-row  items-center p-2 ">
        <div className="text w-full">
          <h1 className='w-fit text-4xl font-bold text-center block m-auto p-2 text-yellow-500 '>sofbed</h1>
          <p className='w-fit text-lg text-left text-white font-bold text-black-500 '>We are a leading company in the manufacture and trade of furniture. Our first goal is quality and customer satisfaction.</p>
          <button className='pt-1 pb-1 pr-12 pl-12 text-bold mt-10 bg-orange-600 hover:bg-orange-300 text-white rounded-md cursor-pointer'><Link href={"/licky"}>play and win discount</Link></button>

        </div>
        <div className="img">
          <Image src={require("/public/img3/prx (12).jpg")} className=' rounded-md sm:none'></Image>
        </div>

      </div>
    </div>
  )
}

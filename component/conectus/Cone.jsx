import React from 'react'

export default function Cone() {
  return (
    <div className='p-2 bg-orange-600 conect'>
        <div className="countiner flex flex-col md:flex-row lg:flex-row justify-around pt-5 gap-20" >
          <form action="" className='flex flex-col  items-center border bg-slate-50 p-5 grow rounded-md shrink shadow-md'>
            <input type="text" placeholder='Name' className='w-70 p-1 mt-5 shadow-md focus:outline-none rounded-lg border' />
            <input type="text" name="n" id="e" placeholder='Your masge' className='w-70 shadow-m focus:outline-none  p-1 mt-5 rounded-lg border' />
            <input type="text" name="n" id="e" placeholder='Your watsapp number' className='w-70 shadow-m focus:outline-none  p-1 mt-5 rounded-lg border' />
            <button  className=' shadow-md pt-1 pb-1 pl-3 pr-3 mt-5 rounded-lg border bg-orange-700 text-white text-2xl ' >Send</button>
          </form>
          <div className="bg bg-gradient-to-r p-3 mt-5 border shadow-lg bg-white rounded-md ">
            <h3 className='w-fit text-lg m-auto p-2 text-bold mt-2 mb-1 rounded-md mb-3 text-white bg-slate-900'>sobed</h3>
            <p className='text-md  text-bold mt-2 p-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima doloremque, inventore porro hic assumenda odit sit ducimus, laboriosam voluptas sapiente tempore fugiat aperiam ipsum placeat ex est velit nisi!
            </p>
          </div>
        </div>
    </div>
  )
}

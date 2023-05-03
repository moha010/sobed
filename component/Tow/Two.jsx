import React from 'react'
import Discount from './Discount'

export default function Two() {
  return (
    <>
      <div className="two bg-slate-50 p-1 ">
        <div className="countiner">
          <div className="heading pt-10 pb-10 ">
            <h2 className='pt-2 relative pb-2 pr-5 pl-5 w-fit m-auto bg-slate-700 text-white text-lg rounded-sm'>Discount</h2>
          </div>
          <div className="element flex flex-row flex-wrap ">
          </div>
          <Discount />
        </div>
      </div>
    </>
  )
}

import React from 'react'
import Mag from './Mag'

export default function Magic() {
  return (
    <div className="two bg-slate-50 p-1 " id='top'> 
    <div className="countiner">
      <div className="heading pt-10 pb-10 ">
        <h2 className='Reat pt-2 relative pb-2 pr-5 pl-5 w-fit m-auto bg-slate-700 text-white text-lg rounded-sm'>Top reted</h2>
      </div>
      <div className="element flex flex-row flex-wrap ">
      </div>
        <Mag />
    </div>
  </div>
  )
}

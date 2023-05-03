import React from 'react'
import { useSelector } from 'react-redux';

export default function Headdisc() {
  const state = useSelector(state => state.one);
  return (
    <div className='p-1 bg-slate-500'>
      <div className="countiner anmy">
        <p>you have <span className='text-orange-600'>{state.discount}%</span>discount</p>
      </div>
    </div>
  )
}

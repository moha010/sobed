import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { date } from '@/date/date';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux'
import { increm } from '@/date/slisc'
import Cartpro from './Carpro';
export default function Cart() {
  let dispat = useDispatch();
  const state = useSelector(state => state.one);
  return (
    <div className='cart bg-slate-500'>
      <div className="countiner">
        <div className="head  flex justify-around p-1">
          <h1 className='w-fit text-lg  text-white'>you have : {state.discount} % discount</h1>
          <div className="allprice flex text-white justify-between gap-4">
            <div className="count text-white">count: {state.count}</div>
            <div className="prise text-white">prise: {state.allprise - (state.allprise * state.discount / 100)}$</div>
          </div>
        </div>
      </div>
      <Cartpro />
    </div>
  )
}

import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { date } from '@/date/date';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux'
import { increm ,ducement} from '@/date/slisc'
export default function Cartpro() {
  let dispat = useDispatch();
  const state = useSelector(state => state.one);
  const car = state.cart ;
  return (
    <div className='p-1 bg-slate-200'>
      <div className="countiner grid ">
        {
          car.map((ele ,index)=>{
            const er = ele.src ;
            return(
              <div className="ele p-4 flex justify-between border-2 border-solid border-yellow-300  flex-col md:flex-row lg:flex-row" key={index}>
                <div className="img ml-3 p-2 bg-white mr-5">
                  <Image src={ele.src}></Image>
                </div>
                <div className="text grow text-center ">
                  <div className="x mt-2">
                    <h4 className='w-fit m-auto pt-1 pb-1 pl-4 pr-4 bg-slate-200 text-lg border rounded-sm'>{ele.name}</h4>
                    <div className="salery mt-3 flex justify-between w-full">
                      <p className='p-2 text-left '>price : {ele.salery}$</p>
                      <p className='p-2 text-left '>count : {ele.count}</p>
                    </div>
                  </div>
                  <p className='p-2 mt-2 mb-2 text-orange-600 text-left text-lg '>all prise : {ele.allprice}$</p>
                  <div className="adre flex justify-between mt-10">
                    <div className="reated">
                        <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <button className="pluse  pl-3 pr-3 text-lg text-white bg-orange-600" onClick={()=>{
                      dispat(increm(ele))
                    }}>
                      +
                    </button>
                    <button className="mimes  pl-3 pr-3 text-lg text-white bg-orange-600" onClick={()=>{
                      dispat(ducement(ele))
                    }}>-</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import { date } from '@/date/date'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { increm } from '@/date/slisc'
export default function Pro(props) {
  let dispat = useDispatch();
  const state = useSelector(state => state.one);
  const glary = date.glary ;
  let e =[...glary]
  e.length = 30 ;
  return (
    <div className='product grid '>
              {
          e.map((ele,index)=>{
            return(
              <div className="cart p-3 bg-slate-100 border-2 border-yellow-200 border-solid" key={index}>
                <div className="img h-52">
                    <Image  src={require(`/public/img3/prx ${ele.imge}`)}  alt="My Image"  width={500} height={400} className='h-100'/>
                </div>
                <div className="text p-2 mt-2 bg-slate-100 ">
                <div className="al flex justify-between">
                    <div className="name text-lg pt-3">{ele.name}</div>
                    <div className="name text-lg pt-3">{ele.salery}$</div>
                  </div>
                  <div className="all flex flex-row justify-between pt-3 ">
                    <div className="reated">
                      <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                      <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                      <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                      <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <button className='pt-1 pb-1 pr-3 pl-3 rounded-md text-yellow-400 bg-orange-600 hover:bg-yellow-400 hover:text-orange-500 ' onClick={()=>{
                      dispat(increm(ele))
                    }}><i class="fa-solid fa-plus"></i></button>
                  </div>
                  <div className="disc text-lg pt-1 mt-3 rounded-lg cursor-pointer pb-1 pr-3 pl-3 text-white bg-yellow-400 hover:bg-orange-500">
                    <Link href={`/pro/${ele.id}`} className='w-full h-full block text-center'>Show detils</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

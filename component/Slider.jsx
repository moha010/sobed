import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { date } from '@/date/date';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux'
import { increm } from '@/date/slisc'
export default function Slide() {
  let dispat = useDispatch();
  const state = useSelector(state => state.one);
  const glary = date.glary ;
  let e =[...glary]
  e.length = 10 ;
    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay:true ,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay:true ,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay:true ,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        {
          e.map((ele,index)=>{
            return(
              <div className="cart p-3 bg-slate-100 border-2 border-yellow-200 border-solid" key={index}>
                <div className="img ">
                    <Image  src={require(`/public/img3/prx (${index + 1}).jpg`)}  alt="My Image"  width={500} height={400} className='h-100'/>
                </div>
                <div className="text p-2 mt-2 bg-slate-100 ">
                <div className="al flex justify-between">
                    <div className="name text-lg pt-3">{ele.name}</div>
                    <div className="name text-lg pt-3">{ele.salery}$</div>
                  </div>
                  <div className="disc text-lg pt-3">{ele.smalldisc}</div>
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
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

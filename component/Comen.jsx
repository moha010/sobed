import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function Coment() {
  let settings = {
    dots: false,
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
          dots: false,
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
    <div>
      <Slider {...settings}>
      <div className="co bg-slate-500 p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
      <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500  border border-white border-solid p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
      <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
        <div className="co bg-slate-500 border border-white border-solid  p-2 rounded-md shadow-sm">
          <h4 className='text-lg text-white m-auto w-fit p-2 '>Mohamed Ali</h4>
          <p className='mt-2 mb-1 text-md text-white text-center p-2'>it is very buteful and very nice </p>
          <div className="reated text-center">
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
            <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
      </Slider>
    </div>
  )
}

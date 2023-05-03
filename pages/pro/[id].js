import Header from "@/component/Header";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { date } from '@/date/date';
import { useDispatch, useSelector } from 'react-redux'
import { increm } from '@/date/slisc'
import Coment from "@/component/Comen";
import Slide2 from "@/component/Slider2";
export default function Product(props) {
  let dispat = useDispatch();
  const state = useSelector(state => state.one);
  return (
    <div className="">
      <Header />
      <div className="col h-full  bg-black p-5">
        <div className="countiner flex gap-3 justify-around items-center  w-24 flex-col md:flex-row lg:flex-row">
          <div className="img">
            <Image src={props.dat.src}></Image>
          </div>
          <div className="tex">
            <h1 className="h1 text-lg text-bold w-fit m-auto text-white">{props.dat.name} </h1>
            <p className="mt-5 p-1 text-center text-white text-lg text-orange-700">{props.dat.disc}</p>
            <div className="price mt-2 p-2 flex justify-between">
              <div className="pric text-lg text-yellow-400 ">prise : {props.dat.salery}$</div>
              <div className="reated">
                <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
                <i class="fa-sharp fa-solid fa-star text-yellow-400"></i>
              </div>
            </div>
            <button className='pt-1 pb-1 pr-3 pl-3 creapy rounded-md text-white bg-orange-600 hover:bg-yellow-400 hover:text-orange-500 ' onClick={()=>{
              dispat(increm(props.dat))
            }}>Add to car</button>
          </div>
        </div>
        <div className="coment mt-7 mb-4">
          <h3 className="w-fit m-auto text-white p-3 text-2xl">comments</h3>
          <Coment />
        </div>
        <div className="athor mt-7 mb-4">
          <h3 className="w-fit m-auto text-white p-3 text-2xl">other produict</h3>
          <Slide2 />
        </div>
      </div>
    </div>
  )
}


export async function getStaticPaths(){
  let res = await fetch("http://localhost:3000/api/hello");
  let date = await res.json();
  const paths = date.map((d)=>{
    return{
      params:{ id : `${d.id}`}
    }
  })
  return{
    paths:paths ,
    fallback : false ,
  }
}

export async function getStaticProps(context){
  let res = await fetch(`http://localhost:3000/api/${context.params.id}`);
  let date = await res.json();
  return{
    props:{
      dat:date
    }
  }
}
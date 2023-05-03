
import cart from '@/pages/cart';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import Headdisc from './Heddisc';

export default function Header() {
  const state = useSelector(state => state.one);
  return (
    <>
      <Headdisc />
      <header className="shadow-lg  z-50 top-10 right-0 w-full bg-white text-orange-600">
        <div className="countiner flex bg-white pt-5 justify-between flex-row  text-black items-center">
          <Link href={"/"} className="logo text-slate-700 hover:text-orange-600">
            <i className="fa-solid fa-couch text-lg "></i>
            <span className='ml-4 text-2xl lg:opacity-100 xl:opacity-100 sm:opacity-0 opacity-0  md:opacity-100'>sobed</span>
            
          </Link>
          <nav className='hidden grow justify-center lg:flex xl:flex sm:hidden md:flex '>
            <Link href={"/"}className='pt-1 pr-5 pl-5 ml-15 hover:-yellow-400 text-orange-600 '>Home</Link>
            <Link href={"/galery"}className='pt-1 pr-5 pl-5 ml-15 hover:-yellow-400 text-orange-600 '>Galery</Link>
            <Link href={"/#top"}className='pt-1 pr-5 pl-5 ml-15 hover:-yellow-400 text-orange-600 '>Top  rated</Link>
          </nav>

          <div className="carall flex flex-row p-2 items-center">
          <div className="clik w-30 h-fit mr-5 cursor-pointer block lg:hidden xl:hidden sm:block md:hidden " onClick={()=>{
            let ele = document.querySelector(".taglo");
            ele.style = "transform: rotateX(0deg) translateY(55%); z-index: 4;"
          }}>
            <span className='w-7 h-1 mt-1 bg-black block '></span>
            <span className='w-7 h-1 mt-1 bg-black block '></span>
            <span className='w-7 h-1 mt-1 bg-black block '></span>
          </div>
            <Link href={"/cart"} className="caricon relative  mr-3">
              <div className='co bg-yellow absolute w-3 h-3 rounded-full top-1 right-1 '>{state.count}</div>
              <i className="fa-solid fa-bag-shopping text-2xl cursor-pointer text-orange-400 hover:text-yellow-400"></i>
            </Link>
            <Link href={"/login"} className="login pt-2 pb-2 pr-5 pl-5 rounded-md bg-yellow-400 text-orange-600 hover:bg-orange-600 hover:text-yellow-500 cursor-pointer">Login</Link>
          </div>
        </div>
          <div className="taglo absolute pt-10">
            <div className="to">
              <span onClick={()=>{
            let ele = document.querySelector(".taglo");
            ele.style = " transform: rotateX(90deg) translateY(70%); z-index: 0;"

            }}>X</span>
            </div>
            <Link href={"/"}className='pt-1 pr-5 pl-5 ml-15 hover:-yellow-400 text-orange-600 mb-3 text-lg '>Home</Link>
            <Link href={"/galery"}className='pt-1 pr-5 pl-5 ml-15 hover:-yellow-400 text-orange-600 mb-3 text-lg '>Galery</Link>
            <Link href={"/#top"}className='pt-1 pr-5 pl-5 ml-15 hover:-yellow-400 text-orange-600 mb-3 text-lg '>Top  rated</Link>
          </div>
      </header>
    </>
  )
}

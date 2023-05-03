import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/component/Header'
import Link from 'next/link'
import Interviwo from '@/component/Interviwo'
import Slide from '@/component/Slider'
import Two from '@/component/Tow/Two'
import Glary from '@/component/Glary/Glary'
import Slide2 from '@/component/Slider2'
import Magic from '@/component/Majic/Magic'
import About from '@/component/About'
import Conect from '@/component/conectus/Conect'
import Discount from '@/component/Tow/Discount'
import Fotter from '@/component/fotter/Fotter'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  return (
    <>
    {console.log(props)}
    <Header />
    <Interviwo />
    <Slide />
    <Two />
    <Glary />
    <Slide2 />
    <Magic />
    <About />
    <Fotter />
    </>
  )
}

// export async function getStaticProps (){
//   let e = await fetch("http://localhost:3000/api/hello");
//   let r = await e.json();
//   return{
//     props :{
//       Pro : r
//     }
//   }
// }

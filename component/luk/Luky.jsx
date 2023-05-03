import React from 'react'
import Header from '../Header';
import { useDispatch, useSelector } from 'react-redux'
import { increm ,discount ,rate} from '@/date/slisc'

const rand = (element)=>{
  let e ;
  if(element === 1790 ||element === 1800){
    e = 0 ;
  }
  else if(element === 1750 ||element === 1765){
    e = 10 ;
  }
  else if(element === 1695 ||element === 1710 ||element === 1720){
    e = 20 ;
  }
  else if(element === 1660 ||element === 1665 ||element === 1670){
    e = 30 ;
  }
  else if(element === 1600 ||element === 1615 ||element === 1630){
    e = 40 ;
  }
  else if(element === 1560 || element === 1590){
    e = 50 ;
  }
  else if(element === 1510 ||element === 1530 ||element === 1550){
    e = 60 ;
  }
  else if(element === 1850 ||element === 1840 || element ===1830){
    e = 70 ;
  }
  return e ;

}

export default function Luky() {
  let dispat = useDispatch();
  const state = useSelector(state => state.one);
  return (
    <>
      <Header />
      <div className="alls">
        <div className='countin '>
          <div className="spain" onClick={(event)=>{
            if(state.rated === 0){
              let arr = [1790 ,1800 ,1765 ,1750,1710 ,1695 ,1720 , 1660 , 1665 ,1670 ,1600 ,1615 ,1630 ,1560 ,590 ,1510 ,1530 ,1550 ,1850 , 1840,1830]
              let random = Math.floor(Math.random() * arr.length);  
              let value = arr[random] 
              let e = document.querySelector(".whell");
              e.style = `transform: rotate(${value}deg);`
              dispat(discount(rand(value)))
              document.querySelector(".spain").style = `cursor: no-drop;pointer-events:none
              `
              dispat(rate());
            }else{

            }
          }}>
            Spain
          </div>
          <div className="whell">
            <div className="number bg-red-600"><span>0</span></div>
            <div className="number bg-slate-600"><span>10</span></div>      
            <div className="number bg-yellow-500"><span>20</span></div>
          
            <div className="number bg-green-600"><span>30</span></div>
            <div className="number bg-black"><span>40</span></div>
            <div className="number bg-orange-500"><span>50</span></div>
          
            <div className="number bg-gray-700"><span>60</span></div>
      
            <div className="number bg-lime-700"><span>70</span></div>
      
          </div>
        </div>
      </div>
    </>
  )
}

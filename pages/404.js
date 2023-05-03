import Header from '@/component/Header'
import React from 'react'

export default function not() {
  return (
    <>
      <Header />
        <div className="notfound  bg-black ">
          <div className="countiner w-full h-full flex justify-center items-center">
          <div className="h1 w-fit text-5xl text-white p-5 ">404 : Not found</div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Discount() {
  return (
    <div className="col grid ">
      <div className='bg-slate-400 p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (1).jpeg")}/>
        </Link>
      </div>
      <div className=' p-3 bg-slate-400 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (2).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (3).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (4).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400 p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (5).jpeg")}/>
        </Link>
      </div>
      <div className=' p-3 bg-slate-400 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (6).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (8).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (9).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (12).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (11).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (13).jpeg")}/>
        </Link>
      </div>
      <div className='bg-slate-400  p-3 rounded-lg shadow-sm '>
        <Link href="/licky">
          <Image src={require("/public/img1/dis (14).jpeg")}/>
        </Link>
      </div>
    </div>
  )
}

import Glary from '@/component/Glary/Glary'
import Largglary from '@/component/Glary/largglary'
import Header from '@/component/Header'
import React from 'react'

export default function galery() {
  return (
    <div>
      <Header />
      <div className= 'w-full h-30'></div>
      <Glary />
      <Largglary />
    </div>
  )
}

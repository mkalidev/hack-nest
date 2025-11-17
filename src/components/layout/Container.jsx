import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Container() {
  return (
    <div className='w-full max-w-[1320px] mx-auto'><Outlet /></div>
  )
}

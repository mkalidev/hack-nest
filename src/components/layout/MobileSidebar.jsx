import React from 'react'
import { RiFileChart2Fill } from 'react-icons/ri'

export default function MobileSidebar() {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white shadow-lg'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <RiFileChart2Fill className='text-2xl' />
                <span className='text-xl font-bold'>Dashboard</span>
            </div>
        </div>
    </div>
  )
}

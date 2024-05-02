import React from 'react'
import Menu from './Menu'
// import { motion } from 'framer-motion';
// import { useState } from 'react';
import search from '../../assets/Abdurahman/search.svg'




function InputSort() {
  return (
    <div>
        <div className='flex justify-between'>
            <div className='w-[825px] h-[64px] border border-gray-300 rounded-full flex py-6 pl-[30px] gap-4'>
                <img className='w-[16px] h-[16px]' src={search} alt="" />    
                <input className='outline-none w-[600px]' type='text' placeholder='Search'/>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default InputSort
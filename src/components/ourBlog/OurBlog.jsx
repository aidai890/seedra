import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../../helpers/Container'
import InputSort from './InputSort'
import Grid from './Grid'


import blog from '../../assets/Abdurahman/blog.svg'

function OurBlog() {
  const [customAnimation,setCustomAnimation] = useState(1)


    const animation = {
        hidden: {
            x: -500,
            opacity: 1,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        })
    };
    const animation2 = {
        hidden: {
            x: 500,
            opacity: 1,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        })
    };
  return (
    <Container>
        <div>
            <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={animation}
                    custom={customAnimation}
            className="bg-cover bg-center h-[251px] w-full mt-5"
            style={{ backgroundImage: `url(${blog})` }}
            >
                <div className='w-[650px] h-[122px] flex flex-col mx-auto pt-[65px] my-[51px]'>
                    <p className='text-blue-gray-800 font-lexend text-4xl font-semibold leading-14 tracking-wider text-center'>Welcome to our blog</p>
                    <p className='text-blue-gray-800 font-lexend text-base font-light leading-7 tracking-normal text-center'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden </p>
                </div>
            </motion.div>
            <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={animation2}
                    custom={customAnimation}            
            >
                <InputSort/>    
            </motion.div>
            <Grid/>
        </div>
    </Container>
  )
}

export default OurBlog
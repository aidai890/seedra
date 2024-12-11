import React from 'react'
import insta from '../../assets/Aidai/insta.svg'
import fake from '../../assets/Aidai/fakebook.svg'

const IconsHeader = () => {
  return (
    <div className='flex gap-2'>
        <img src={insta} alt="" />
        <img src={fake} alt="" />
    </div>
  )
}

export default IconsHeader
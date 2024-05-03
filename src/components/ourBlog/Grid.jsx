import React from 'react'

import AnimateProduct from './animateProduct'
import AnimateProduct2 from './AnimateProduct2'
import AnimateProduct3 from './AnimateProduct3'

import clock from '../../assets/Abdurahman/clock.svg'
import grass from '../../assets/Abdurahman/grass.svg'
import rasberry from '../../assets/Abdurahman/rasberry.svg' 
import women from '../../assets/Abdurahman/women.svg'
import berry from '../../assets/Abdurahman/berry.svg'
import young from '../../assets/Abdurahman/young.svg'
import arab from '../../assets/Abdurahman/arab.svg'

function Grid() {
  return (
    <div className='flex flex-col gap-[30px]'>
        <div className='flex gap-[70px]'>
            <div className='flex flex-col gap-[30px]'>
                <div className='w-[780px] h-[300px] rounded-lg bg-slate-200 flex'>
                    <div className='p-[30px] flex flex-col gap-2'>
                        <div className='flex gap-1'>
                            <img src={clock}/>
                            <p className='text-gray-700 text-base font-normal'>12.09.2021</p>
                        </div>
                        <div className='w-[372px] h-[63px]  text-black text-xl font-semibold'>How to plant spinach correctly in <br/> winter</div>
                        <div className='text-gray-500 text-base font-normal'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</div>
                        <button className='text-green-600 font-lexend text-base font-medium w-[106px] h-[51px] bg-white rounded-lg mt-3'>Read</button>
                    </div>
                    <img src={grass}/>
                </div>
                <div className='flex gap-[80px]'>
                    <AnimateProduct/>
                    <AnimateProduct2/>
                </div>
                <div className='w-[780px] h-[300px] rounded-lg bg-slate-200 flex'>
                    <div className='p-[30px] flex flex-col gap-2'>
                        <div className='flex gap-1'>
                            <img src={clock}/>
                            <p className='text-gray-700 text-base font-normal'>12.09.2021</p>
                        </div>
                        <div className='w-[372px] h-[63px]  text-black text-xl font-semibold'>How to plant spinach correctly in <br/> winter</div>
                        <div className='text-gray-500 text-base font-normal'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</div>
                        <button className='text-green-600 font-lexend text-base font-medium w-[106px] h-[51px] bg-white rounded-lg mt-3'>Read</button>
                    </div>
                    <img src={rasberry}/>
                </div>
            </div>
            <div className=' flex flex-col gap-[30px]'>
                <div className='w-[350px] h-[630px] rounded-lg bg-slate-200 p-[30px]'>
                    <div className='flex gap-1'>
                        <img src={clock}/>
                        <p className='text-gray-700 text-base font-normal'>12.09.2021</p>
                    </div>
                    <div className='w-[306px] h-[63px]  text-black text-xl font-semibold'>How to plant spinach <br/> correctly in  winter</div>
                    <div className='text-gray-500 text-base font-normal'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</div>
                    <button className='text-green-600 font-lexend text-base font-medium w-[106px] h-[51px] bg-white rounded-lg mt-3'>Read</button>
                    <img src={women}/>
                </div>
                <AnimateProduct3/>
            </div>
        </div>
        <div className='flex gap-[75px]'>
            <div className='w-[350px] h-[630px] rounded-lg bg-slate-200 p-[30px]'>
                <div className='flex gap-1'>
                    <img src={clock}/>
                    <p className='text-gray-700 text-base font-normal'>12.09.2021</p>
                </div>
                <div className='w-[306px] h-[63px]  text-black text-xl font-semibold'>How to plant spinach <br/> correctly in  winter</div>
                <div className='text-gray-500 text-base font-normal'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</div>
                <button className='text-green-600 font-lexend text-base font-medium w-[106px] h-[51px] bg-white rounded-lg mt-3'>Read</button>
                <img className='h-[353px]' src={arab}/>
            </div>
            <div className='w-[350px] h-[630px] rounded-lg bg-slate-200 p-[30px]'>
                <div className='flex gap-1'>
                    <img src={clock}/>
                    <p className='text-gray-700 text-base font-normal'>12.09.2021</p>
                </div>
                <div className='w-[306px] h-[63px]  text-black text-xl font-semibold'>How to plant spinach <br/> correctly in  winter</div>
                <div className='text-gray-500 text-base font-normal'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</div>
                <button className='text-green-600 font-lexend text-base font-medium w-[106px] h-[51px] bg-white rounded-lg mt-3'>Read</button>
                <img className='mt-32' src={berry}/>
            </div>
            <div className='w-[350px] h-[630px] rounded-lg bg-slate-200 p-[30px] '>
                <div className='flex gap-1'>
                    <img src={clock}/>
                    <p className='text-gray-700 text-base font-normal'>12.09.2021</p>
                </div>
                <div className='w-[306px] h-[63px]  text-black text-xl font-semibold'>How to plant spinach <br/> correctly in  winter</div>
                <div className='text-gray-500 text-base font-normal'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</div>
                <button className='text-green-600 font-lexend text-base font-medium w-[106px] h-[51px] bg-white rounded-lg mt-3'>Read</button>
                <img className=' h-[353px]'  src={young}/>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Grid
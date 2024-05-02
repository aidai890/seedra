import React from 'react'

import clock from '../../assets/Abdurahman/clock.svg'
import grass3 from '../../assets/Abdurahman/grass3.svg'

import './second.css'

function AnimateProduct2() {
  return (
    <div>
        <div class="container2">  
            <div class="card">  
                <div class="imgBx">  
                    <img src={grass3} alt="nike-air-shoe"/>  
                </div>  
                <div class="contentBx">  
                    <h2>How to plant spinach correctly in winter</h2>  
                    <div className='flex' class="size">  
                        <img src={clock}/>
                        <h3>12.09.2021</h3>    
                    </div>  
                    <a href="#">Read</a>  
                </div>  
            </div>  
        </div>  
    </div>
  )
}

export default AnimateProduct2
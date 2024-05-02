import React from 'react'

import clock from '../../assets/Abdurahman/clock.svg'
import women2 from '../../assets/Abdurahman/women2.svg'

import './second.css'

function AnimateProduct3() {
  return (
    <div>
        <div class="container2">  
            <div class="card">  
                <div class="imgBx">  
                    <img src={women2} alt="nike-air-shoe"/>  
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

export default AnimateProduct3
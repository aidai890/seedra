import React from 'react'

import clock from '../../assets/Abdurahman/clock.svg'
import grass2 from '../../assets/Abdurahman/grass2.svg'

import  './animate.css'

function animateProduct() {
  return (
    <div>
        <div class="container">  
            <div class="card">  
                <div class="imgBx">  
                    <img src={grass2} alt="nike-air-shoe"/>  
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

export default animateProduct
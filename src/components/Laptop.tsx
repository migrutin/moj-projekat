import React from 'react'
import { Link } from 'react-router-dom'
import laptopp from '../img/laptopp.png'
import laptop2 from '../img/laptop2.png'



function Laptop() {
  return (
    <div className='laptop-items'>
        <div className='laptop-div-1'>
        <h1 className='laptop-h'>Laptop računari</h1>
        </div>
        
        <div className='laptop'>
        <div className='laptop-item'>
           <Link to='/laptops' className='link'> 
           <img src={laptopp} alt="" className='laptop-item-img' />
           <h1 className='link-h'>LENOVO V15 G2 ITLi5 i5/8/256 82KB000SYA</h1>
           <div className='flex'>
           <p className='link-p'>69.999 RSD</p>
           <i className="fa fa-shopping-cart fa-2xl link-i" aria-hidden="true"></i>
            
           </div>
          
           </Link>
          
           <Link to='/laptops' className='link'> 
           <img src={laptop2} alt="" className='laptop-item-img' />
           <h1 className='link-h'>LENOVO V15 G2 ITLi5 i5/8/256 82KB000SYA</h1>
           <div className='flex'>
           <p className='link-p'>69.999 RSD</p>
           <i className="fa fa-shopping-cart fa-2xl link-i" aria-hidden="true"></i>
            
           </div>
          
           </Link>

           <Link to='/laptops' className='link'> 
           <img src={laptopp} alt="" className='laptop-item-img' />
           <h1 className='link-h'>LENOVO V15 G2 ITLi5 i5/8/256 82KB000SYA</h1>
           <div className='flex'>
           <p className='link-p'>69.999 RSD</p>
           <i className="fa fa-shopping-cart fa-2xl link-i" aria-hidden="true"></i>
            
           </div>
          
           </Link>

           <Link to='/laptops' className='link'> 
           <img src={laptop2} alt="" className='laptop-item-img' />
           <h1 className='link-h'>LENOVO V15 G2 ITLi5 i5/8/256 82KB000SYA</h1>
           <div className='flex'>
           <p className='link-p'>69.999 RSD</p>
           <i className="fa fa-shopping-cart fa-2xl link-i" aria-hidden="true"></i>
            
           </div>
          
           </Link>

           <Link to='/laptops' className='link'> 
           <img src={laptopp} alt="" className='laptop-item-img' />
           <h1 className='link-h'>LENOVO V15 G2 ITLi5 i5/8/256 82KB000SYA</h1>
           <div className='flex'>
           <p className='link-p'>69.999 RSD</p>
           <i className="fa fa-shopping-cart fa-2xl link-i" aria-hidden="true"></i>
            
           </div>
          
           </Link>

           <Link to='/laptops' className='link'> 
           <img src={laptop2} alt="" className='laptop-item-img' />
           <h1 className='link-h'>LENOVO V15 G2 ITLi5 i5/8/256 82KB000SYA</h1>
           <div className='flex'>
           <p className='link-p'>69.999 RSD</p>
           <i className="fa fa-shopping-cart fa-2xl link-i" aria-hidden="true"></i>
            
           </div>
          
           </Link>
          
           
        </div>
    </div>
       
    </div>
  )
}

export default Laptop
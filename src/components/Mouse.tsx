import React from 'react'
import OneMouse from './OneMouse';

interface TypeOneMouse {
    id: number;
    name:string;
    imgUrl: string;
    price: number; 
  
}

interface TypeProps {
    arrayMice : TypeOneMouse[]
}

const Mouse = ({arrayMice}: TypeProps) => {
  return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Miševi</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayMice.map(mouse=>
              <OneMouse
               id={mouse.id} 
              imgUrl={mouse.imgUrl} 
              name={mouse.name} 
              price={mouse.price}
              key={mouse.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
  
            }

export default Mouse
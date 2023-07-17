import OneHeadphones from "./OneHeadphones";

interface TypeOneHeadphones{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayHeadphones: TypeOneHeadphones[]
}
const Headphone = ({arrayHeadphones}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Slušalice</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayHeadphones.map(headphones=>
              <OneHeadphones
               id={headphones.id} 
              imgUrl={headphones.imgUrl} 
              name={headphones.name} 
              price={headphones.price}
              key={headphones.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Headphone
import OneMobile from "./OneMobile";

interface TypeOneMobile{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayMobile: TypeOneMobile[]
}
const Mobile = ({arrayMobile}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Mobile računari</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayMobile.map(mobile=>
              <OneMobile
               id={mobile.id} 
              imgUrl={mobile.imgUrl} 
              name={mobile.name} 
              price={mobile.price}
              key={mobile.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Mobile
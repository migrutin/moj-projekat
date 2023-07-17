import OneAirConditioner from "./OneAirConditioner";

interface TypeOneAirConditioner{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayAirConditioner: TypeOneAirConditioner[]
}
const AirConditioner = ({arrayAirConditioner}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Klima urеđaji</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayAirConditioner.map(airConditioner=>
              <OneAirConditioner
               id={airConditioner.id} 
              imgUrl={airConditioner.imgUrl} 
              name={airConditioner.name} 
              price={airConditioner.price}
              key={airConditioner.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default AirConditioner
import OneCharger from "./OneCharger";

interface TypeOneCharg{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayChargers: TypeOneCharg[]
}
const Charger = ({arrayChargers}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Punjači za laptop</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayChargers.map(charger=>
              <OneCharger
               id={charger.id} 
              imgUrl={charger.imgUrl} 
              name={charger.name} 
              price={charger.price}
              key={charger.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Charger
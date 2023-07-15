import OneHub from "./OneHub";

interface TypeOneHub{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayHubs: TypeOneHub[]
}
const Charger = ({arrayHubs}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Hub-ovi</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayHubs.map(hub=>
              <OneHub
               id={hub.id} 
              imgUrl={hub.imgUrl} 
              name={hub.name} 
              price={hub.price}
              key={hub.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Charger
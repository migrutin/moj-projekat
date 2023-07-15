import OneCooler from "./OneCooler";
import OneHub from "./OneHub";

interface TypeOneHub{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayCoolers: TypeOneHub[]
}
const Cooler = ({arrayCoolers}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Postolja</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayCoolers.map(cooler=>
              <OneCooler
               id={cooler.id} 
              imgUrl={cooler.imgUrl} 
              name={cooler.name} 
              price={cooler.price}
              key={cooler.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Cooler
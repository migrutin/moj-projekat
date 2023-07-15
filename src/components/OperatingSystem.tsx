import OneOS from "./OneOS";

interface TypeOneOS{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayOs: TypeOneOS[]
}
const OperatingSystem = ({arrayOs}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Operativni sistemi</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayOs.map(os=>
              <OneOS
               id={os.id} 
              imgUrl={os.imgUrl} 
              name={os.name} 
              price={os.price}
              key={os.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default OperatingSystem
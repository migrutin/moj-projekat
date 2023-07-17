import OneTablet from "./OneTablet";

interface TypeOneTablet{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayTablet: TypeOneTablet[]
}
const Tablet = ({arrayTablet}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Tablet računari</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayTablet.map(tablet=>
              <OneTablet
               id={tablet.id} 
              imgUrl={tablet.imgUrl} 
              name={tablet.name} 
              price={tablet.price}
              key={tablet.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Tablet
import OneSoftware from "./OneSoftware";

interface TypeOneSoftware{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arraySoftware: TypeOneSoftware[]
}
const Software = ({arraySoftware}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Aplikacije</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arraySoftware.map(software=>
              <OneSoftware
               id={software.id} 
              imgUrl={software.imgUrl} 
              name={software.name} 
              price={software.price}
              key={software.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Software
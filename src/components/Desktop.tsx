import OneDesktop from "./OneDesktop";

interface TypeOneDesktop{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayDesktop: TypeOneDesktop[]
}
const Desktop = ({arrayDesktop}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Gigatron računari</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayDesktop.map(desktop=>
              <OneDesktop
               id={desktop.id} 
              imgUrl={desktop.imgUrl} 
              name={desktop.name} 
              price={desktop.price}
              key={desktop.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Desktop
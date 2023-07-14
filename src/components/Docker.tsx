import OneDocker from "./OneDocker";

interface TypeOneDock{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayDockers: TypeOneDock[]
}
const Docker = ({arrayDockers}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Docking station</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayDockers.map(docker=>
              <OneDocker
               id={docker.id} 
              imgUrl={docker.imgUrl} 
              name={docker.name} 
              price={docker.price}
              key={docker.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Docker
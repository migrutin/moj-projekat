import OneCharger from "./OneCharger";
import OneComponent from "./OneComponent";

interface TypeOneComponent{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayComponent: TypeOneComponent[]
}
const Component1 = ({arrayComponent}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Komponente</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayComponent.map(oneComponent=>
              <OneComponent
               id={oneComponent.id} 
              imgUrl={oneComponent.imgUrl} 
              name={oneComponent.name} 
              price={oneComponent.price}
              key={oneComponent.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Component1
import OneCable from "./OneCable";

interface TypeOneCable{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayCables: TypeOneCable[]
}
const Cable = ({arrayCables}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Kablovi</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayCables.map(cable=>
              <OneCable
               id={cable.id} 
              imgUrl={cable.imgUrl} 
              name={cable.name} 
              price={cable.price}
              key={cable.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Cable
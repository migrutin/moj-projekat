import OneWatch from "./OneWatch";

interface TypeOneWatch{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayWatch: TypeOneWatch[]
}
const Watch = ({arrayWatch}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Pametni satovi</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayWatch.map(watch=>
              <OneWatch
               id={watch.id} 
              imgUrl={watch.imgUrl} 
              name={watch.name} 
              price={watch.price}
              key={watch.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Watch
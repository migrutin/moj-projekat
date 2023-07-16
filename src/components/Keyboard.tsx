import OneKeyboard from "./OneKeyboard";

interface TypeOneKeyboard{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayKeyboard: TypeOneKeyboard[]
}
const Keyboard = ({arrayKeyboard}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Tastature</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayKeyboard.map(keyboard=>
              <OneKeyboard
               id={keyboard.id} 
              imgUrl={keyboard.imgUrl} 
              name={keyboard.name} 
              price={keyboard.price}
              key={keyboard.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Keyboard
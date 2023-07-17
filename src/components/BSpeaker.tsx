import OneBSpeaker from "./OneBSpeaker";

interface TypeOneBSpeaker{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayBSpeaker: TypeOneBSpeaker[]
}
const BSpeaker = ({arrayBSpeaker}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Prenosni bluetooth zvučnici</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayBSpeaker.map(bSpeaker=>
              <OneBSpeaker
               id={bSpeaker.id} 
              imgUrl={bSpeaker.imgUrl} 
              name={bSpeaker.name} 
              price={bSpeaker.price}
              key={bSpeaker.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default BSpeaker
import OneMemoryCard from "./OneMemoryCard";

interface TypeOneMemoryCard{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayMemoryCard: TypeOneMemoryCard[]
}
const MemoryCard = ({arrayMemoryCard}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Memorijske kartice</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayMemoryCard.map(memoryCard=>
              <OneMemoryCard
               id={memoryCard.id} 
              imgUrl={memoryCard.imgUrl} 
              name={memoryCard.name} 
              price={memoryCard.price}
              key={memoryCard.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default MemoryCard
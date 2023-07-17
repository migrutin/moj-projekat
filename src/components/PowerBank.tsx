import OnePowerBank from "./OnePowerBank";

interface TypeOnePowerBank{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayPowerBanks: TypeOnePowerBank[]
}
const PowerBank = ({arrayPowerBanks}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Power Bank eksterne baterije</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayPowerBanks.map(powerBank=>
              <OnePowerBank
               id={powerBank.id} 
              imgUrl={powerBank.imgUrl} 
              name={powerBank.name} 
              price={powerBank.price}
              key={powerBank.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default PowerBank
import OneKitchenApp from "./OneKitchenApp";

interface TypeOneKitchenApp{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayKitchenApp: TypeOneKitchenApp[]
}
const KitchenApp = ({arrayKitchenApp}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Mali kuhinjski aparati</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayKitchenApp.map(kitchenApp=>
              <OneKitchenApp
               id={kitchenApp.id} 
              imgUrl={kitchenApp.imgUrl} 
              name={kitchenApp.name} 
              price={kitchenApp.price}
              key={kitchenApp.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default KitchenApp
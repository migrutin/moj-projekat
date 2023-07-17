import OneHomeApp from "./OneHomeApp";

interface TypeOneHomeApp{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayHomeApp: TypeOneHomeApp[]
}
const HomeApp = ({arrayHomeApp}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Mali kućni aparati</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayHomeApp.map(homeApp=>
              <OneHomeApp
               id={homeApp.id} 
              imgUrl={homeApp.imgUrl} 
              name={homeApp.name} 
              price={homeApp.price}
              key={homeApp.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default HomeApp
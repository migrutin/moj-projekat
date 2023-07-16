import OneDocker from "./OneDocker";
import OneGame from "./OneGame";

interface TypeOneGame{ 
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}


interface TypeProps {
    arrayGame: TypeOneGame[]
}
const Game = ({arrayGame}: TypeProps) => {
    return (
        <div className='laptop-items'>
          <div className='laptop-div-1'>
            <h1 className='laptop-h'>Igre</h1>
          </div>
    
          <div className='laptop'>
            <div className='laptop-item'>
             
            {arrayGame.map(game=>
              <OneGame
               id={game.id} 
              imgUrl={game.imgUrl} 
              name={game.name} 
              price={game.price}
              key={game.id}
              />)}
    
            </div>
          </div>
    
        </div>
      )
    }
export default Game
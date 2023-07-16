import { useEffect, useState } from 'react'
import Docker from './Docker';
import Game from './Game';


type OneGame = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyGameFetch = Array<OneGame>

const Games = () => {
    
    const [data, setData] = useState<OneGame[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/games")
            const result = await response.json() as MyGameFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Game arrayGame={data} />
    }
  
}

export default Games
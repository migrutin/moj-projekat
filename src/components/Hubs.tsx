import { useEffect, useState } from 'react'
import Hub from './Hub';


type OneHub = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyHubFetch = Array<OneHub>

const Hubs = () => {
    
    const [data, setData] = useState<OneHub[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/hubs")
            const result = await response.json() as MyHubFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Hub arrayHubs={data} />
    }
  
}

export default Hubs
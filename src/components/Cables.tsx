import { useEffect, useState } from 'react'
import Cable from './Cable';


type OneCable = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyChargerFetch = Array<OneCable>

const Cables = () => {
    
    const [data, setData] = useState<OneCable[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/cables")
            const result = await response.json() as MyChargerFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Cable arrayCables={data} />
    }
  
}

export default Cables
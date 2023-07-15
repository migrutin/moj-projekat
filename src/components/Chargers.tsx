import { useEffect, useState } from 'react'
import Charger from './Charger';


type OneCharger = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyChargerFetch = Array<OneCharger>

const Chargers = () => {
    
    const [data, setData] = useState<OneCharger[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/chargers")
            const result = await response.json() as MyChargerFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Charger arrayChargers={data} />
    }
  
}

export default Chargers
import { useEffect, useState } from 'react'
import Appliance from './Appliance';


type OneAppliance = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyApplianceFetch = Array<OneAppliance>

const Appliances = () => {
    
    const [data, setData] = useState<OneAppliance[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/appliances")
            const result = await response.json() as MyApplianceFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Appliance arrayAppliance={data} />
    }
  
}

export default Appliances
import { useEffect, useState } from 'react'
import Cooler from './Cooler';
import OperatingSystem from './OperatingSystem';


type OneOS = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyOSFetch = Array<OneOS>

const OperatingSystems = () => {
    
    const [data, setData] = useState<OneOS[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/os")
            const result = await response.json() as MyOSFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <OperatingSystem arrayOs={data} />
    }
  
}

export default OperatingSystems
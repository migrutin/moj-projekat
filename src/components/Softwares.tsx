import { useEffect, useState } from 'react'
import Cooler from './Cooler';
import OperatingSystem from './OperatingSystem';
import Software from './Software';


type OneSoftware = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MySoftwareFetch = Array<OneSoftware>

const Softwares = () => {
    
    const [data, setData] = useState<OneSoftware[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/software")
            const result = await response.json() as MySoftwareFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Software arraySoftware={data} />
    }
  
}

export default Softwares
import { useEffect, useState } from 'react'
import Cooler from './Cooler';


type OneCooler = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyCoolerFetch = Array<OneCooler>

const Coolers = () => {
    
    const [data, setData] = useState<OneCooler[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/coolers")
            const result = await response.json() as MyCoolerFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Cooler arrayCoolers={data} />
    }
  
}

export default Coolers
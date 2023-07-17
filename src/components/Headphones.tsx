import { useEffect, useState } from 'react'
import Headphone from './Headphone';



type OneHeadphones = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyHeadphonesFetch = Array<OneHeadphones>

const Headphones = () => {
    
    const [data, setData] = useState<OneHeadphones[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/headphones")
            const result = await response.json() as MyHeadphonesFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Headphone arrayHeadphones={data} />
    }
  
}

export default Headphones
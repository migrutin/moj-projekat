import { useEffect, useState } from 'react'
import BrandName from './BrandName';
import AllIn from './AllIn';


type OneAllIn = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyAllInFetch = Array<OneAllIn>

const AllIns = () => {
    
    const [data, setData] = useState<OneAllIn[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/allInOne")
            const result = await response.json() as MyAllInFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <AllIn arrayAllIn={data} />
    }
  
}

export default AllIns
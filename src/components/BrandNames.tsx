import { useEffect, useState } from 'react'
import BrandName from './BrandName';


type OneBrandName = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyBrandFetch = Array<OneBrandName>

const BrandNames = () => {
    
    const [data, setData] = useState<OneBrandName[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/brandNameRacunari")
            const result = await response.json() as MyBrandFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <BrandName arrayBrandName={data} />
    }
  
}

export default BrandNames
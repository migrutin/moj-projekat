import {  useEffect, useState } from 'react'
import Component1 from './Component1';



type OneComponent = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyComponentFetch = Array<OneComponent>

const Components = () => {
    
    const [data, setData] = useState<OneComponent[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/components")
            const result = await response.json() as MyComponentFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Component1 arrayComponent={data} />
    }
  
}

export default Components
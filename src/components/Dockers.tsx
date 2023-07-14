import { useEffect, useState } from 'react'
import Docker from './Docker';


type OneDocker = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyDockerFetch = Array<OneDocker>

const Dockers = () => {
    
    const [data, setData] = useState<OneDocker[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/dockers")
            const result = await response.json() as MyDockerFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
        <div></div>
    } else {
        return <Docker arrayDockers={data} />
    }
  
}

export default Dockers
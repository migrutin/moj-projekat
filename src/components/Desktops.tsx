import { useEffect, useState } from 'react'
import Charger from './Charger';
import Desktop from './Desktop';


type OneDesktop = {
    id: number; 
    name: string; 
    imgUrl: string; 
    price: number;
}

type MyDesktopFetch = Array<OneDesktop>

const Desktops = () => {
    
    const [data, setData] = useState<OneDesktop[]>()
  
    useEffect(()=>{
        const fetchFunc = async () => {
            const response = await fetch(" http://localhost:3000/desktops")
            const result = await response.json() as MyDesktopFetch
            setData(result)
        }
        fetchFunc();
    }, [])

    if(data==null) {
       return <div></div>
    } else {
        return <Desktop arrayDesktop={data} />
    }
  
}

export default Desktops
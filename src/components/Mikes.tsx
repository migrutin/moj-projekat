import { useEffect, useState } from 'react'
import Printer from './Printer';
import Mike from './Mike';

type OneMike = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneMike>


const Mikes = () => {
  const [data,setData]=useState<OneMike[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/mikes");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])


    return (
      <>{data ? <Mike arrayMike={data} /> : <div></div>}</>
      
    )
   
  
}

export default  Mikes
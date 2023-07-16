import React, { useEffect, useState } from 'react'
import Mouse from './Mouse'
import Monitor from './Monitor';

type OneMonitor = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneMonitor>


const Monitors = () => {
  const [data,setData]=useState<OneMonitor[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/monitors");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])


    return (
      <>{data ? <Monitor arrayMonitor={data} /> : <div></div>}</>
      
    )
   
  
}

export default Monitors
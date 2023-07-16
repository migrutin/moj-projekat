import React, { useEffect, useState } from 'react'
import Printer from './Printer';

type OnePrinter = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OnePrinter>


const Printers = () => {
  const [data,setData]=useState<OnePrinter[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/printers");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])


    return (
      <>{data ? <Printer arrayPrinter={data} /> : <div></div>}</>
      
    )
   
  
}

export default  Printers
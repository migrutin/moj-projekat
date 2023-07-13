import React, { useEffect, useState } from 'react'
import Mouse from './Mouse'

type OneProduct = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneProduct>


function Mice() {
  const tt = require('../data2/mice.json');
  const [data,setData]=useState<OneProduct[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/mice");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])


    return (
      <>{data ? <Mouse arrayMice={data} /> : <div>Ovde ide neki login spiner</div>}</>
      
    )
   
  
}

export default Mice
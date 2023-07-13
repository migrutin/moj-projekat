import  { useEffect, useState } from 'react'
import Laptop from '../components/Laptop'

type OneBagProduct = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type BagFetchType = Array<OneBagProduct>


function Bags() {
  const tt = require('../data2/bags.json');
  const [data,setData]=useState<OneBagProduct[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch("http://localhost:3001/bags");
      const result=await response.json() as BagFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div>Ovde ide neki login spiner</div>
    }else{
      return <Laptop arrayLaptops={data}/>
    }
  
}

export default Bags
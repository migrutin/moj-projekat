import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Laptop from '../components/Laptop'

type OneProduct = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneProduct>
function Laptops() {
  const tt = require('../data2/laptops.json');
  const [data,setData]=useState<OneProduct[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/laptops");
      const result=await response.json() as MyFetchType;
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

export default Laptops
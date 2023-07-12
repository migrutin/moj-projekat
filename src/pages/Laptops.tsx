import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Underline from '../components/Underline'
import Newsletter from '../components/Newsletter'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import Laptop from '../components/Laptop'
import JedanLaptop from '../components/JedanLaptop'

//Ovo ti je jedan proizvod iz onog niza koji dobijes kada posaljes GET request
type JedanProizvod={
  id:number;
  name:string;
  imgUrl:string;
  price:number;
}

type TipOnogaStoFetchujes=Array<JedanProizvod>;



 function Laptops() {
  const tt = require('../data2/laptops.json');
  const [data,setData]=useState<JedanProizvod[]>();
  useEffect(()=>{
    
    const funkcijaZaFetchovanje=async ()=>{
      const response=await fetch(" http://localhost:3000/laptops");
      const result=await response.json() as TipOnogaStoFetchujes;
      console.log(result);
      setData(result);

    }

    funkcijaZaFetchovanje();

  },[])



  if(data==null){
    return <div>Ovde ide neki login spiner</div>
  }else{
    return <Laptop nizLaptopova={data}/>
  }
// return <div>{<JedanLaptop id={data[0].id} name={data[0].name} imgUrl={"../img/laptop2.png"} price={data[0].price} key={data[0].id}/>}</div>
 //<Laptop id={1} name={"test"} imgUrl={"test"} price={23}/>
  // if(data==null){
  //   return <div>"Ovde dodas loading spiner!"</div>
  // }else{
  // return (
  //   <div>
  //       <Header></Header>
  //       <Underline></Underline>
  //       {data.map((laptop) => (
  //       <Laptop id={laptop.id} name={laptop.name} imgUrl={laptop.imgUrl} price={laptop.price} key={laptop.id} />
  //     ))}
  //       <Newsletter></Newsletter>
  //       <AboveFooter></AboveFooter>
  //       <Footer></Footer>
  //   </div>
  // )
  // }
}

export default Laptops
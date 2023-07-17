import { useEffect, useState } from 'react'
import Tablet from './Tablet';

type OneTablet = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneTablet>


const Tablets = () => {
  
  const [data,setData]=useState<OneTablet[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/tablets");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <Tablet arrayTablet={data}/>
    }
  
}

export default Tablets
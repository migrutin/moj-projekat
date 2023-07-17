import { useEffect, useState } from 'react'
import Tv from './Tv';

type OneTv = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneTv>


const Tvs = () => {
  const [data,setData]=useState<OneTv[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/tvs");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])


    return (
      <>{data ? <Tv arrayTv={data} /> : <div></div>}</>
      
    )
   
  
}

export default  Tvs
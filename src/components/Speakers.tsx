import { useEffect, useState } from 'react'
import Speaker from './Speaker';

type OneSpeaker = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneSpeaker>


const Speakers = () => {
  const [data,setData]=useState<OneSpeaker[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/speakers");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])


    return (
      <>{data ? <Speaker arraySpeaker={data} /> : <div></div>}</>
      
    )
   
  
}

export default  Speakers
import { useEffect, useState } from 'react'
import MemoryCard from '../components/MemoryCard'

type OneMemoryCard = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneMemoryCard>


const MemoryCards = () => {
  
  const [data,setData]=useState<OneMemoryCard[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/memoryCards");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <MemoryCard arrayMemoryCard={data}/>
    }
  
}

export default MemoryCards
import { useEffect, useState } from 'react'
import Projector from './Projector';

type OneProjector = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneProjector>


const Projecotrs = () => {
  
  const [data,setData]=useState<OneProjector[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/projectors");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <Projector arrayProjectors={data}/>
    }
  
}

export default Projecotrs
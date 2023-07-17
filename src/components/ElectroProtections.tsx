import { useEffect, useState } from 'react'
import ElectroProtection from './ElectroProtection';

type OneElectroProtection= {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneElectroProtection>


const ElectroProtections = () => {
  
  const [data,setData]=useState<OneElectroProtection[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/electroProtections");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <ElectroProtection arrayElectroProtections={data}/>
    }
  
}

export default ElectroProtections
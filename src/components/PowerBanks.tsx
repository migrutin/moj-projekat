import { useEffect, useState } from 'react'
import PowerBank from './PowerBank';

type OnePowerBank = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OnePowerBank>


const PowerBanks = () => {
  
  const [data,setData]=useState<OnePowerBank[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/powerBanks");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <PowerBank arrayPowerBanks={data}/>
    }
  
}

export default PowerBanks
import { useEffect, useState } from 'react'
import Battery from './Battery';

type OneBattery = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneBattery>


const Batteries = () => {
  
  const [data,setData]=useState<OneBattery[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/batteries");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <Battery arrayBatteries={data}/>
    }
  
}

export default Batteries
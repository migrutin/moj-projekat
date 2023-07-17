import { useEffect, useState } from 'react'
import Watch from './Watch';

type OneWatch = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneWatch>


const Watches = () => {
  
  const [data,setData]=useState<OneWatch[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/watches");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <Watch arrayWatch={data}/>
    }
  
}

export default Watches
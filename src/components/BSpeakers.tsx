import { useEffect, useState } from 'react'
import BSpeaker from './BSpeaker';

type OneBSpeaker = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneBSpeaker>


const BSpeakers = () => {
  
  const [data,setData]=useState<OneBSpeaker[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/bluetoothSpeakers");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <BSpeaker arrayBSpeaker={data}/>
    }
  
}

export default BSpeakers
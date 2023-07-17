import { useEffect, useState } from 'react'
import Mobile from './Mobile';

type OneMobile = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneMobile>


const Mobiles = () => {
  
  const [data,setData]=useState<OneMobile[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/phones");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <Mobile arrayMobile={data}/>
    }
  
}

export default Mobiles
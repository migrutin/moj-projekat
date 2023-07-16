import { useEffect, useState } from 'react'
import Keyboard from './Keyboard';
import Base from './Base';

type OneBase = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneBase>


const Bases = () => {
  
  const [data,setData]=useState<OneBase[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/bases");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <Base arrayBase={data}/>
    }
  
}

export default Bases
import { useEffect, useState } from 'react'
import Laptop from '../components/Laptop'
import Keyboard from './Keyboard';

type OneKeyboard = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneKeyboard>


const Keyboards = () => {
  
  const [data,setData]=useState<OneKeyboard[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/keyboards");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <Keyboard arrayKeyboard={data}/>
    }
  
}

export default Keyboards
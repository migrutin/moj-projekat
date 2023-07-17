import { useEffect, useState } from 'react'
import RadioStation from './RadioStation';

type OneRadioStation = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneRadioStation>


const RadioStations = () => {
  
  const [data,setData]=useState<OneRadioStation[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/radioStations");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <RadioStation arrayRadioStations={data}/>
    }
  
}

export default RadioStations
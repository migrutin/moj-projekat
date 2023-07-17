import { useEffect, useState } from 'react'
import AudioVideo from './AudioVideo';

type OneAudioVideo = {
  id:number,
  name: string;
  imgUrl : string;
  price: number;
}

type MyFetchType = Array<OneAudioVideo>


const AudioVideos = () => {
  
  const [data,setData]=useState<OneAudioVideo[]>();
  useEffect(()=>{

    const fetchingFunc=async ()=>{
      const response=await fetch(" http://localhost:3000/audioVideo");
      const result=await response.json() as MyFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();
      
    }, [])

    if(data==null){
      return <div></div>
    }else{
      return <AudioVideo arrayAv={data}/>
    }
  
}

export default AudioVideos
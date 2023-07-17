import { useEffect, useState } from 'react'
import HomeApp from './HomeApp';

type OneHomeAppProduct = {
  id: number,
  name: string;
  imgUrl: string;
  price: number;
}

type HomeAppFetchType = Array<OneHomeAppProduct>


const HomeApps = () => {

  const [data, setData] = useState<OneHomeAppProduct[]>();
  useEffect(() => {

    const fetchingFunc = async () => {
      const response = await fetch("http://localhost:3000/homeAppliances");
      const result = await response.json() as HomeAppFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();

  }, [])

  if (data == null) {
    return <div></div>
  } else {
    return <HomeApp arrayHomeApp={data} />
  }

}

export default HomeApps
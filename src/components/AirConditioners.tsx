import { useEffect, useState } from 'react'
import AirConditioner from './AirConditioner';

type OneAirConditionerProduct = {
  id: number,
  name: string;
  imgUrl: string;
  price: number;
}

type AirConditionerFetchType = Array<OneAirConditionerProduct>


const AirConditioners = () => {

  const [data, setData] = useState<OneAirConditionerProduct[]>();
  useEffect(() => {

    const fetchingFunc = async () => {
      const response = await fetch("http://localhost:3000/airConditioners");
      const result = await response.json() as AirConditionerFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();

  }, [])

  if (data == null) {
    return <div></div>
  } else {
    return <AirConditioner arrayAirConditioner={data} />
  }

}

export default AirConditioners
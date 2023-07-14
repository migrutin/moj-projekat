import { useEffect, useState } from 'react'
import Laptop from '../components/Laptop'
import Bag from './Bag';

type OneBagProduct = {
  id: number,
  name: string;
  imgUrl: string;
  price: number;
}

type BagFetchType = Array<OneBagProduct>


const Bags = () => {

  const [data, setData] = useState<OneBagProduct[]>();
  useEffect(() => {

    const fetchingFunc = async () => {
      const response = await fetch("http://localhost:3000/bags");
      const result = await response.json() as BagFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();

  }, [])

  if (data == null) {
    return <div></div>
  } else {
    return <Bag arrayBags={data} />
  }

}

export default Bags
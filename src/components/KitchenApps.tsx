import { useEffect, useState } from 'react'
import KitchenApp from './KitchenApp';

type OneKitchenAppProduct = {
  id: number,
  name: string;
  imgUrl: string;
  price: number;
}

type KitchenAppFetchType = Array<OneKitchenAppProduct>


const KitchenApps = () => {

  const [data, setData] = useState<OneKitchenAppProduct[]>();
  useEffect(() => {

    const fetchingFunc = async () => {
      const response = await fetch("http://localhost:3000/kitchenAppliances");
      const result = await response.json() as KitchenAppFetchType;
      console.log(result);
      setData(result);
    }
    fetchingFunc();

  }, [])

  if (data == null) {
    return <div></div>
  } else {
    return <KitchenApp arrayKitchenApp={data} />
  }

}

export default KitchenApps
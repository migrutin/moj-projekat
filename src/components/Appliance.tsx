import OneAppliance from "./OneAppliance";


interface TypeAppliance {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeApplianceeProps {
    arrayAppliance: TypeAppliance[]
}

const Appliance = ({ arrayAppliance }: TypeApplianceeProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>All-In-One računari</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayAppliance.map(oneAppliance =>
            <OneAppliance
              id={oneAppliance.id}
              imgUrl={oneAppliance.imgUrl}
              name={oneAppliance.name}
              price={oneAppliance.price}
              key={oneAppliance.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Appliance
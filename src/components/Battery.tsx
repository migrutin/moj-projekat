
import OneBattery from './OneBattery';

interface TypeOneBattery {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeBatteryProps {
    arrayBatteries: TypeOneBattery[]
}

const Battery = ({ arrayBatteries }: TypeBatteryProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Baterije i punjači</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayBatteries.map(battery =>
            <OneBattery
              id={battery.id}
              imgUrl={battery.imgUrl}
              name={battery.name}
              price={battery.price}
              key={battery.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Battery
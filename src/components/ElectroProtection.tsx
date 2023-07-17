import OneElectroProtection from './OneElectroProtection';

interface TypeOneElectroProtection {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeElectroProtectionProps {
    arrayElectroProtections: TypeOneElectroProtection[]
}

const ElectroProtection = ({ arrayElectroProtections }: TypeElectroProtectionProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Elektro zaštita</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayElectroProtections.map(electroProtection =>
            <OneElectroProtection
              id={electroProtection.id}
              imgUrl={electroProtection.imgUrl}
              name={electroProtection.name}
              price={electroProtection.price}
              key={electroProtection.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default ElectroProtection
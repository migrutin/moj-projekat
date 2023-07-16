import OneBrandName from './OneBrandName';

interface TypeOneBrandName {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeBrandNameProps {
    arrayBrandName: TypeOneBrandName[]
}

const BrandName = ({ arrayBrandName }: TypeBrandNameProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Brand name računari</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayBrandName.map(oneBrandName =>
            <OneBrandName
              id={oneBrandName.id}
              imgUrl={oneBrandName.imgUrl}
              name={oneBrandName.name}
              price={oneBrandName.price}
              key={oneBrandName.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default BrandName
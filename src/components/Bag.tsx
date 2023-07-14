import OneBag from './OneBag';

interface TypeOneBag {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeBagProps {
  arrayBags: TypeOneBag[]
}

const Bag = ({ arrayBags }: TypeBagProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Torbe</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayBags.map(oneBag =>
            <OneBag
              id={oneBag.id}
              imgUrl={oneBag.imgUrl}
              name={oneBag.name}
              price={oneBag.price}
              key={oneBag.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Bag
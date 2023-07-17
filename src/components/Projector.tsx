import OneProjector from './OneProjector';

interface TypeOneProjector {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeProjectProps {
    arrayProjectors: TypeOneProjector[]
}

const Projector = ({ arrayProjectors }: TypeProjectProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Projektori</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayProjectors.map(projector =>
            <OneProjector
              id={projector.id}
              imgUrl={projector.imgUrl}
              name={projector.name}
              price={projector.price}
              key={projector.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Projector
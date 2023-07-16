import OneMike from './OneMike';

interface TypeOneMike {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeMikeProps {
    arrayMike: TypeOneMike[]
}

const Mike = ({ arrayMike }: TypeMikeProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Mikrofoni</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayMike.map(mike =>
            <OneMike
              id={mike.id}
              imgUrl={mike.imgUrl}
              name={mike.name}
              price={mike.price}
              key={mike.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Mike
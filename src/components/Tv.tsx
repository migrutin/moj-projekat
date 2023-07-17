  import OneTV from './OneTV';

interface TypeOneTV {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeTVProps {
    arrayTv: TypeOneTV[]
}

const Tv = ({ arrayTv }: TypeTVProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Televizori</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayTv.map(tv =>
            <OneTV
              id={tv.id}
              imgUrl={tv.imgUrl}
              name={tv.name}
              price={tv.price}
              key={tv.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Tv
import OneAllIn from "./OneAllIn";


interface TypeAllIn {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeAllIneProps {
    arrayAllIn: TypeAllIn[]
}

const AllIn = ({ arrayAllIn }: TypeAllIneProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>All-In-One računari</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayAllIn.map(oneAllIn =>
            <OneAllIn
              id={oneAllIn.id}
              imgUrl={oneAllIn.imgUrl}
              name={oneAllIn.name}
              price={oneAllIn.price}
              key={oneAllIn.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default AllIn
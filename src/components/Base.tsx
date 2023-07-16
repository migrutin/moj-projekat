import OneBase from './OneBase';

interface TypeOneBase {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeBaseProps {
  arrayBase: TypeOneBase[]
}

const Base = ({ arrayBase }: TypeBaseProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Podloge</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayBase.map(base =>
            <OneBase
              id={base.id}
              imgUrl={base.imgUrl}
              name={base.name}
              price={base.price}
              key={base.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Base
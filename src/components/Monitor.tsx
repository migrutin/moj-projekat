import OneMonitor from './OneMonitor';

interface TypeOneMonitor {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeMonitorProps {
    arrayMonitor: TypeOneMonitor[]
}

const Monitor = ({ arrayMonitor }: TypeMonitorProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Monitori</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayMonitor.map(oneMonitor =>
            <OneMonitor
              id={oneMonitor.id}
              imgUrl={oneMonitor.imgUrl}
              name={oneMonitor.name}
              price={oneMonitor.price}
              key={oneMonitor.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Monitor
import OneRadioStation from './OneRadioStation';

interface TypeOneRadioStation {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeRadioStationProps {
    arrayRadioStations: TypeOneRadioStation[]
}

const RadioStation = ({ arrayRadioStations }: TypeRadioStationProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Radio stanice</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayRadioStations.map(radioStation =>
            <OneRadioStation
              id={radioStation.id}
              imgUrl={radioStation.imgUrl}
              name={radioStation.name}
              price={radioStation.price}
              key={radioStation.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default RadioStation
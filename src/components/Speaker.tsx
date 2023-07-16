import OnePrinter from './OnePrinter';

interface TypeOneSpeaker {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeSpeakerProps {
    arraySpeaker: TypeOneSpeaker[]
}

const Speaker = ({ arraySpeaker }: TypeSpeakerProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Štampači</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arraySpeaker.map(speaker =>
            <OnePrinter
              id={speaker.id}
              imgUrl={speaker.imgUrl}
              name={speaker.name}
              price={speaker.price}
              key={speaker.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Speaker
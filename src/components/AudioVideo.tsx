import OneAudioVideo from './OneAudioVideo';

interface TypeOneAV {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypeAVProps {
    arrayAv: TypeOneAV[]
}

const AudioVideo = ({ arrayAv }: TypeAVProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>AV oprema</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayAv.map(audioVideo =>
            <OneAudioVideo
              id={audioVideo.id}
              imgUrl={audioVideo.imgUrl}
              name={audioVideo.name}
              price={audioVideo.price}
              key={audioVideo.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default AudioVideo
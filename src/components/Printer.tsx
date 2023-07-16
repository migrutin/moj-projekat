import OneMonitor from './OneMonitor';
import OnePrinter from './OnePrinter';

interface TypeOnePrinter {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

interface TypePrinterProps {
    arrayPrinter: TypeOnePrinter[]
}

const Printer = ({ arrayPrinter }: TypePrinterProps) => {
  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Štampači</h1>
      </div>
      <div className='laptop'>
        <div className='laptop-item'>
          {arrayPrinter.map(printer =>
            <OnePrinter
              id={printer.id}
              imgUrl={printer.imgUrl}
              name={printer.name}
              price={printer.price}
              key={printer.id}
            />)}




        </div>
      </div>

    </div>
  )
}

export default Printer
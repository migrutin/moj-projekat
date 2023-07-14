import OneLaptop from './OneLaptop'

interface TypeOneLaptop{
  id: number;
  name:string;
  imgUrl: string;
  price: number; 

}

interface TypeProps{
  arrayLaptops: TypeOneLaptop[]
}



 const Laptop = ({arrayLaptops}:TypeProps) => {



  return (
    <div className='laptop-items'>
      <div className='laptop-div-1'>
        <h1 className='laptop-h'>Laptop računari</h1>
      </div>

      <div className='laptop'>
        <div className='laptop-item'>
         
        {Array.isArray(arrayLaptops) &&  arrayLaptops.map(oneLaptop=>
          <OneLaptop
          id={oneLaptop.id} 
          imgUrl={oneLaptop.imgUrl} 
          name={oneLaptop.name} 
          price={oneLaptop.price}
          key={oneLaptop.id}
          />)}

        </div>
      </div>

    </div>
  )
}

export default Laptop

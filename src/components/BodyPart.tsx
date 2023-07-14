
import { Link} from 'react-router-dom'
import logomajstor from '../img/logomajstor.png';
import majstor from '../img/majstor.png'
import glob from '../img/glob.png'
import a from '../img/a.png'
import samsung from '../img/samsung.png'
import appdevice from '../img/appdevice.png'
import sams from '../img/sams.png'
import ImageSlideComponent from './ImageSlideComponent';
import SmallImgSlide from './SmallImgSlide';
import BodyLabel from './BodyLabel';

const BodyPart = () => {



    return (
        <div className=' max-w-full home'>
            <div className='flex  home-slide space-x-6'>
              
                <ImageSlideComponent></ImageSlideComponent>
                <SmallImgSlide></SmallImgSlide>
            </div>


           
            <BodyLabel></BodyLabel>

            {/* Najtrazeniji proizvodi */}
            <div className='bg-transparent rounded-lg h-56 w-3/4 mt-10 ml-44 
            pt-auto flex  justify-between flex-col '>

                <h1 className='font-bold text-2xl pb-5'>Najtraženiji proizvodi</h1>
                <div className="container bg-white rounded-lg h-52 w-full"></div>

            </div>

            {/* Specijalni popusti i akcije */}


            <h1 className='font-bold text-2xl ml-44 mt-10'>Specijalni popusti i akcije</h1>
            <div className="grid grid-cols-3 gap-4 w-3/4 ml-44 my-10 space-x-4">
                <div className="rounded-lg h-96 bg-red-200">01</div>
                <div className="flex flex-col space-y-4">
                    <div className="rounded-lg h-48 bg-blue-200">02</div>
                    <div className="rounded-lg h-44 bg-green-200">03</div>
                </div>
                <div className="rounded-lg h-96 bg-purple-200">04</div>
            </div>





            {/* Preporucujemo za Vas */}

            <div>
                <h1 className='font-bold text-2xl ml-44'>Preporučujemo za Vas</h1>
                <div className='bg-transparent rounded-lg h-full w-3/4 mt-10 ml-44 
            pt-auto flex py-2 space-x-3'>


                    <div className="bg-yellow-200 rounded-lg h-96 w-1/4 justify-between flex items-center">

                        <div className="flex flex-col ml-4">
                            <h2 className="font-semibold">1</h2>

                        </div>


                    </div>

                    <div className="bg-blue-200 rounded-lg h-96 w-1/4 justify-between flex items-center ">

                        <div className="flex flex-col ml-4">
                            <h2 className="font-semibold">2</h2>

                        </div>


                    </div>

                    <div className="bg-green-200 rounded-lg h-96 w-1/4 justify-between flex items-center ">

                        <div className="flex flex-col ml-4 ">
                            <h2 className="font-semibold ">3</h2>

                        </div>


                    </div>

                    <div className="bg-purple-200 rounded-lg h-96 w-1/4 justify-between flex items-center  ">
                        <div className="flex flex-col mr-2">
                            <h2 className="font-semibold ml-2">4</h2>

                        </div>



                    </div>




                </div>
            </div>


            {/* Usluzna montaza */}
            {/*  !!!!!!!!!!OVDE UNETI LINK KA DRUGOJ STRANICI!!!!!!!!! */}
            <Link to="/App.tsx">
                <div className='bg-blue-900 rounded-lg h-24 w-3/4 mt-10 ml-44 
            pt-auto flex  justify-between py-1'>
                    <img src={logomajstor} alt="" className='h-32 w-32 ' />
                    <div className='flex-col h-24 mt-2'>
                        <h1 className='font-bold text-2xl text-yellow-600'>USLUŽNA MONTAŽA</h1>
                        <p className='font-bold text-2xl text-white'>televizora i samostojeće bele tehnike</p>
                    </div>
                    <img src={majstor} alt="majstor" className='' />
                    <div className=' h-24 w-72 relative'>
                        <button className='h-10 w-32 rounded-full absolute right-1 bottom-3 bg-yellow-600 hover:bg-yellow-300'> Saznajte više</button>
                    </div>
                </div>
            </Link>

            <Link to="/">
                <div className='bg-purple-950 rounded-lg h-24 w-3/4 mt-32 ml-44 
            pt-auto flex  justify-between py-1'>
                    <img src={glob} alt="" className='h-20 w-32 ml-2 mt-1' />
                    <div className='flex-col h-24 mt-2'>
                        <h1 className='font-bold text-2xl text-yellow-600'>Globaltel POSTPAID paketi uz telefone</h1>
                        <p className='font-bold text-2xl text-white'>u svim Gigatron prodavnicama!</p>
                    </div>
                    <img src={majstor} alt="" className='' />
                    <div className=' h-24 w-72 relative'>
                        <button className='h-10 w-32 rounded-full absolute right-1 bottom-3 bg-yellow-600 hover:bg-yellow-300'> Saznajte više</button>
                    </div>
                </div>
            </Link>



            {/* Apple & Samsung */}

            <div className='custom-height w-3/4 ml-44 mt-10 flex justify-between space-x-3'>
                <div className='rounded-lg w-1/2  bg-gray-200 flex-col flex items-center justify-top '>
                    <img src={samsung} alt="" className='w-1/3 ' />
                    <h1 className='font-bold text-3xl text-center'>Zakorači u Samsung <br></br>e-svet</h1>
                    <button className='h-10 w-32 rounded-full mt-5 bg-white'>Saznajte više</button>
                    <img src={sams} alt="samsung uredjaji" className='h-56 mt-10' />
                </div>

                <div className='rounded-lg w-1/2  bg-green-200 flex-col flex items-center justify-top '>
                    <img src={a} alt="" className='w-1/3 mt-3' />
                    <h1 className='font-bold text-3xl text-center mt-5'>Besprekorno iskustvo  u <br></br>svakom uređaju</h1>
                    <button className='h-10 w-32 rounded-full mt-5 bg-white'>Saznajte više</button>
                    <img src={appdevice} alt="apple uredjaji" className='h-44 w-96 mt-16' />

                </div>


            </div>


            <div className='h-96'></div>












        </div>
    )
}



export default BodyPart
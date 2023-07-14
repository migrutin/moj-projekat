import mapa from '../img/mapa.jpg'



const Contact = () => {
    return (
        <div className="contact">
            <div className="img">
                <img src={mapa} alt="" className='slika' />
            </div>
            <div className="ispod-slike"></div>
            <div className=" div-preko flex">
                <div className='zuto'>
                    <h1 className='text-2xl'>Kontakt</h1>
                    <h2 className='text-lg mt-5'>Call centar</h2>
                    <p className='mt-3 text-sm'>Fizička lica</p>
                    <p>011 44 14 000</p>
                    <p className='text-sm'>Pravna lica</p>
                    <p>011 44 14 010</p>
                    <p className='text-sm'>Pozivi sa mobilne mreže</p>
                    <p>066 6 67 67 67</p>
                    <p className='text-sm mt-2'>ili e-mailom na:</p>
                    <p className='mb-5'>prodaja@gigatronshop.com</p>
                    <p>pravnalica@gigatronshop.com</p>

                    <h1 className='radno-vreme'>Radno vreme Call Centra</h1>
                    <p>Ponedeljak - Petak: od 08h do 20h</p>
                    <p>Subota: od 09h do 16:30h</p>
                    <p>Nedelja: neradni dan</p>

                    <h1 className='pib'>GIGATRON D.O.O EXPORT - IMPORT</h1>
                    <h1 className='pib'>PIB: 102778428</h1>

                    <p className='font-semibold mt-2'>Preuzmite obrasce:</p>
                    <div className='flex flex-col'>
                        <a href='' className='obrasci mt-5'>PEPDV obrazac</a>
                        <a href='' className='obrasci'>PIB</a>
                        <a href='' className='obrasci'>Obrazac za identifikaciju</a>
                        <a href='' className='obrasci'>Obrazac za odustanak od ugovora</a>
                    </div>


                </div>
                <div className=''>
                    <div className="podaci">
                        <input type="" placeholder="Ime*" name="" id="" className="ime" />
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Contact
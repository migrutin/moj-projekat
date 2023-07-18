import { useNavigate } from 'react-router-dom'
import klima from '../img/ugradnjaKlime.jpg'

const UgradnjaKlime = () => {

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/klima-uredjaji')
    }
    return (
        <div>
            <div className='promocije'>
                <h1 className='promocije-naslov'>
                    Ugradnja klima uređaja na rate</h1>
                <div className='promocije-linija'></div>
                <div className='px-10'>
                    <img src={klima} alt="" className='glob-slika' />

                </div>

                <div className='space-y-5 mt-10'>
                    <p>Zašto ugradnju klima-uređaja ne biste platili na rate? Kupovinom klima-uređaja u Gigatron prodavnicama stičete pravo i na kupovinu vaučera za ugradnju. Na ovaj način možete i cenu ugradnje podeliti na rate. </p>

                    <p>Prilikom kupovine klima-uređaja putem naše web prodavnice, kupovinu vaučera možete ostvariti pozivom na broj: 011/44-14-000 | 066/66-76-767 ili slanjem upita na mail: prodaja@gigatronshop.rs</p>
                    <p>Ne zaboravite! Nakon prve kupovine, imate 15 dana da izvršite registraciju na sajtu i tada stičete pravo na bodove koji Vam pripadaju.</p>

                    <p>Ugradnju vrše isključivo ovlašćeni servisi za robnu marku vašeg klima-uređaja, a usluga obuhvata sledeće:

                        <p>1. Ugradnja klima-uređaja (jedan proboj zida između unutrašnje i spoljašnje jedinice, sa maksimalnim međusobnim rastojanjem do 1,5 m)</p>
                        <p>2. Postavljanje spoljašnje jedinice na visini do 5 metara od nivoa tla, uz korišćenje merdevina</p>
                        <p>3. Postavljanje spoljašnje jedinice sa pristupačnih mesta, kroz otvore na objektu ugradnje (terase, prozori i slično)</p>
                        <p>4. Pojedini modeli inverter klima-uređaja za instalaciju zahtevaju cevi dužine minimalno 3 m. Razlika u dužini cevi, od 1,5 m, se doplaćuje servisu prilikom montaže, čak i ako je razdaljina između spoljašnje i unutrašnje jedinice kraća od 3 m.</p>
                        </p>

                </div>

                <button className='bonus-button' onClick={handleNavigation}>Pogledaj ponudu klima </button>


            </div>
        </div>
    )
}

export default UgradnjaKlime
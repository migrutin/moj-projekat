import { useNavigate } from 'react-router-dom'
import tv from '../img/monatazaTv.jpg'

const MontazaTv = () => {

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/tv')
    }
    return (
        <div>
            <div className='promocije'>
                <h1 className='promocije-naslov'>
                    Montaža televizora i bele tehnike</h1>
                <div className='promocije-linija'></div>
                <div className='px-10'>
                    <img src={tv} alt="" className='glob-slika' />

                </div>

                <div className='space-y-5 mt-10'>
                    <p>Poštovani kupci, Gigatronova ponuda je sada bogatija za još jednu sjajnu uslugu koja podrazumeva montažu televizora, aspiratora, uređaja iz asortimana samostojeće i ugradne bele tehnike kupljenih u Gigatronu. </p>

                    <p>Više ne morate da brinete o montaži televizora na zid, postavljanju i povezivanju bele tehnike na električnu i/ili vodovodnu mrežu – jer će se za to postarati profesionalci.</p>
                    <p> Ova usluga je trenutno dostupna isključivo na teritoriji grada Beograda, Novog Sada i Niša uz nastojanje da u bliskoj budućnosti omogućimo i na široj teritoriji Srbije.</p>

                    <h1 className='font-bold'>Kako ova usluga funkcioniše?</h1>

                    <p>Prilikom kupovine televizora, aspiratora ili uređaja iz asortimana samostojeće i ugradne bele tehnike, na prodajnom mestu možete kupiti i vaučer koji vam obezbeđuje uslugu montaže kupljenog uređaja. Ukoliko to želite, vaučer za montažu uređaja možete platiti i na rate, kao i uređaje koje kupujete.</p>
                    <p>Usluga montaže i ugradnje bele tehnike odnosi se na samostojeće i ugradne uređaje koji se priključuju na postojeći izvor električne energije i na postojeći dovod i odvod vode (veš-mašine, mašine za pranje posuđa, bojleri, frižideri, električni šporeti, ugradne rerne, ugradne ploče, aspiratori).</p>
                    <p> Montažer nije u obavezi da transportuje i prenosi uređaje koji se montiraju (prenošenje sa sprata na sprat, prenošenje iz drugih stanova ili prostorija) i nije u obavezi da odnosi stare uređaje. Obaveza kupca je da uređaj koji se montira dopremi u prostoriju u kojoj će montaža biti izvršena.</p>
                  

                </div>

                <button className='bonus-button' onClick={handleNavigation}>Pogledaj asortiman </button>


            </div>
        </div>
    )
}

export default MontazaTv
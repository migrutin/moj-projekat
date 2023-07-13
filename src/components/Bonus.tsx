import { useNavigate } from 'react-router-dom'
import globb from '../img/bonus.jpg'

function Bonus() {

  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/registracija')
  }
  return (
    <div>
      <div className='promocije'>
        <h1 className='promocije-naslov'>
          Sakupljajte bodove i ostvarite dodatne popuste!</h1>
        <div className='promocije-linija'></div>
        <div className='px-10'>
          <img src={globb} alt="" className='glob-slika' />

        </div>

        <div className='space-y-5 mt-10'>
          <p>Prilikom svake kupovine u Gigatron radnjama i na sajtu stičete bodove koji će biti upisani na Baš Tvoju Gigatron Karticu i koje možete iskoristiti prilikom sledeće ili neke druge kupovine.
            Sve što je potrebno je da budete registrovani korisnik na Gigatron sajtu i bodovi
            će biti vidljivi na Vašem profilu i Baš Tvojoj Gigatron Kartici nakon petnaest (15) dana od dana kupovine. </p>

          <p>Pored osnovne Baš Tvoje Gigatron Kartice, dobićete i tri pomoćne kartice koje su vezane za osnovnu karticu i koje možete dati na korišćenje članovima porodice i prijateljima.</p>

          <p>Ne zaboravite! Nakon prve kupovine, imate 15 dana da izvršite registraciju na sajtu i tada stičete pravo na bodove koji Vam pripadaju.</p>

          <p>Pozovite prijatelje i osvojite dodatne bodove! Kao registrovani korisnik imate mogućnost da putem svog profila pozivate druge korisnike da se registruju na Gigatron sajtu i da Vam budu prijatelji unutar Gigatron socijalne mreže. Za svaku kupovinu vašeg prijatelja veću od 5.000 RSD biće Vam dodeljeno 5 bodova.</p>

          <p>Podelite svoje mišljenje sa nama! Kao registrovani korisnik možete oceniti proizvod koji ste kupili i biće Vam dodeljeno 5 bodova. Petnaest (15) dana nakon kupovine dobićete automatsku email poruku sa linkom ka Vašem profilu gde možete napisati svoj utisak o kupljenom proizvodu. Gigatron zadržava pravo da obriše svaki komentar ili deo komentara koji sadrži neprikladan sadržaj ili gde nije naveden utisak o proizvodu.</p>

          <p>Utisak možete ostaviti za bilo koji kupljeni proizvod čija je cena veća od 1.000 RSD.</p>
        </div>

        <button className='bonus-button' onClick={handleNavigation}>Registruj se i osvoji bodove</button>

        <div className='space-y-5'>
          <h1 className='promocije-naslov mt-5'>Vrednosti bodova i popusti</h1>

          <p>Za svakih 1.000 RSD utrošenih na kupovinu na Gigatron sajtu ili u Gigatron prodavnicama na Vaš nalog i Baš Tvoju Gigatron Karticu biće upisan 1 bod, čija vrednost iznosi 20 RSD. Maksimalni broj bodova koje možete sakupiti je 500. Nakon toga možete nastaviti sa kupovinom ali Vam sistem neće dodeljivati nove bodove dok ne potrošite postojeće.</p>
          <p>Maksimalni popust koji možete ostvariti koristeći Baš Tvoju Gigatron Karticu i bodove je 50% od ukupne vrednosti kupovine. Bodove možete iskoristiti u svakom trenutku za kupovinu bilo kog proizvoda iz naše ponude, bez obzira na sakupljeni broj bodova.</p>
          <p>Za više informacija o pravilima programa Baš Tvoja Gigatron Kartica posetite www.gigatron.rs ili pozivite call centar na 011 44 14 000.</p>
          <p>Zahvaljujemo Vam se na ukazanom poverenju i želimo Vam uspešne buduće kupovine u Gigatronu!</p>
        </div>
      </div>
    </div>
  )
}

export default Bonus
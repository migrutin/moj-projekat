import React, { useState } from 'react';
import klima from '../img/klima.png';
import { Link } from 'react-router-dom';

function Snizenje() {

  const linkoviPromenljiva=[
    {
      to: '/klime',
      text: 'Losa ponuda klima uređaja - GREE',
      image: klima,
    },
    {
      to: 'https://gigatron.rs/akcije?strana=2',
      text: 'Srednja ponuda klima uređaja - GREE',
      image: klima,
    },
    {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      }
    
  ]

  const [linkovi, setLinkovi] = useState(linkoviPromenljiva);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const pojam = event.currentTarget.value;
      pretraga(pojam);
    }
  };

const pretraga = (term: string) => {
  
    /*Ti jednom kad filtriras, promeni ti se taj state i ne mozes da se vratis nazad, ako probas losa, on ce da ti pokaze nju, zatim probas srednja on nece nista da ti pokaze,
    tj pokazace ti kao da nema nijedna! To je zato sto vrsi filter funkciju nad trenutnim state-om, a trenutni state je niz koji ima samo jednu [ona losa klima] zato se koristi fetch, ali okej je ovo za vezbu!
    */

    //zato cu ja ovde da vrsim filter nad pocetnim stanjem (to je sada ova promenljiva koja je konstanta i ne menja se)
    const filtriraniLinkovi = linkoviPromenljiva.filter((link)=> 
    link.text.toLowerCase().includes(term.toLowerCase()));
    //ako sam npr poslao prazan string, pa okej, on ce videti da svaki element niza sadrzi prazan string i opet ce te vratiti na pocetak!
    //test
    setLinkovi(filtriraniLinkovi);
    //

}

  return (
    <div className='sm:w-full sm:h-200vh sm:flex ponuda'>
      <div className='div-izdvajamo-iz-ponude flex flex-col'>
        <h1 className='izdvajamo-iz-ponude'>Izdvajamo iz ponude</h1>
        <div className='linija'></div>

        <Link to='/akcije' key='link-akcije' className='linkovi'> Akcije </Link>
        <div className='linija'></div>
        <Link to='/novosti' key='link-novosti' className='linkovi'> Novosti</Link>
        <div className='linija'></div>
        <Link to='/gaming-korner' key='link-gamingKorner' className='linkovi'> Gaming korner </Link>
        <div className='linija'></div>
        <Link to='/promocije' key='link-promocije' className='linkovi'> Promocije </Link>
        <div className='linija'></div>
        <Link to='/promocije-u-prodavnici' key='link-promocijeProdavnice' className='linkovi'> Promocije u prodavnicama</Link>
        <div className='linija'></div>
      </div>

      <div className='akcija flex-col'>
        <h1 className='naslov'>Akcije</h1>

        <input
          type='text'
          placeholder='Unesite pojam za pretragu'
          className='pretraga'
          onKeyDown={handleKeyDown}
        />

        <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
          {linkovi.map((link, index) => (
            //Ovo izdvojis da bude jedna komponenta, onda ce to da ti izgleda ovako:
            //<KomponentaZaAkciju/> i umesto 4 linije imas jednu.
            <Link key={index} to={link.to} className='kvadrat'>
              <img src={link.image} alt='' className='h-40' />
              <p className='kvadrat-p'>{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Snizenje;

import React, { useState } from 'react';
import klima from '../img/klima.png';
import { Link } from 'react-router-dom';

function Snizenje() {
  const [linkovi, setLinkovi] = useState([
    {
      to: '/klime',
      url: 'https://example.com/klime',
      text: 'Losa ponuda klima uređaja - GREE',
      image: klima,
    },
    {
      to: 'https://gigatron.rs/akcije?strana=2',
      url: 'https://gigatron.rs/akcije?strana=2',
      text: 'Srednja ponuda klima uređaja - GREE',
      image: klima,
    },
    {
        to: 'https://gigatron.rs/akcije?strana=2',
        url: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        url: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        url: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        url: 'https://gigatron.rs/akcije?strana=2',
        text: 'Super ponuda klima uređaja - GREE',
        image: klima,
      }
    
  ]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const pojam = event.currentTarget.value;
      pretraga(pojam);
    }
  };

const pretraga = (term: string) => {
    const filtriraniLinkovi = linkovi.filter((link)=> 
    link.text.toLowerCase().includes(term.toLowerCase()));
    setLinkovi(filtriraniLinkovi);
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

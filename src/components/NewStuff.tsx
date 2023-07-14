import React, { useState } from 'react';
import philips from '../img/philips.jpg';
import { Link } from 'react-router-dom';
import KomponentaZaAkciju from './KomponentaZaAkciju';

const Snizenje = () => {
 const linkoviPromenljiva=[
    {
      to: '/klime',
      text: 'Philips slusalice',
      image: philips,
    },
    {
      to: 'https://gigatron.rs/akcije?strana=2',
      text: 'Samsung slusalice',
      image: philips,
    },
    {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Apple slusalice',
        image: philips,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Slusalice',
        image: philips,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Dobre slusalice',
        image: philips,
      },
      {
        to: 'https://gigatron.rs/akcije?strana=2',
        text: 'Slusalice',
        image: philips,
      }
    
  ];

  const [linkovi, setLinkovi] = useState(linkoviPromenljiva);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const pojam = event.currentTarget.value;
      pretraga(pojam);
    }
  };

const pretraga = (term: string) => {
    const filtriraniLinkovi = linkoviPromenljiva.filter((link)=> 
    link.text.toLowerCase().includes(term.toLowerCase()));
    setLinkovi(filtriraniLinkovi);
}

  return (
    <div className='sm:w-full sm:h-200vh sm:flex ponuda'>
      <div className='div-izdvajamo-iz-ponude flex flex-col'>
        <h1 className='izdvajamo-iz-ponude'>Izdvajamo iz ponude</h1>
        <div className='linija'></div>

        <KomponentaZaAkciju></KomponentaZaAkciju>
      </div>

      <div className='akcija flex-col'>
        <h1 className='naslov'>Novosti</h1>

        <input
          type='text'
          placeholder='Unesite pojam za pretragu'
          className='pretraga'
          onKeyDown={handleKeyDown}
        />

        <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
          {linkovi.map((link, index) => (
            <Link key={index} to={link.to} className='kvadrat'>
              <img src={link.image} alt='' className='h-40 w-64' />
              <p className='kvadrat-p'>{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Snizenje;

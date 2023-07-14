import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import promocije from '../img/tv.jpg'
import KomponentaZaAkciju from './KomponentaZaAkciju'

const Promotions = () => {
    const linkoviPromenljiva=[
    
        {
            to: '/klime',
            text: 'Ne propustite super promocije u radnjama',
            image: promocije
        },
        {
            to: '/klime',
            text: 'Ne propustite dobre promocije u radnjama',
            image: promocije
        },
        {
            to: '/klime',
            text: 'Ne propustite odlicne promocije u radnjama',
            image: promocije
        },
        {
            to: '/klime',
            text: 'Ne propustite ekstra promocije u radnjama',
            image: promocije
        },
        {
            to: '/klime',
            text: 'Ne propustite promocije u radnjama',
            image: promocije
        },
        {
            to: '/klime',
            text: 'Ne propustite promocije u radnjama',
            image: promocije
        }
    ]

    const [linkovi, setLinkovi] = useState(linkoviPromenljiva)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const pojam = event.currentTarget.value;
            pretraga(pojam);
        }
    }

    const pretraga = (term: string) => {
        
            const filtriraniLinkovi = linkoviPromenljiva.filter(link =>
                link.text.toLowerCase().includes(term.toLowerCase()));
            setLinkovi(filtriraniLinkovi)


    }






    return (
        <div className='sm:w-full sm:h-200vh sm:flex ponuda'>
            <div className='div-izdvajamo-iz-ponude flex flex-col'>
                <h1 className='izdvajamo-iz-ponude'>Izdvajamo iz ponude</h1>
                <div className='w-40 h-px bg-gray-300'></div>


                <KomponentaZaAkciju></KomponentaZaAkciju>
            </div>


            <div className='akcija flex-col'>
                <h1 className='naslov'>Promocije</h1>
                <input type="" placeholder='Unesite pojam za pretragu' className='pretraga'
                    onKeyDown={handleKeyDown} />

                <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
                    {linkovi.map((link, index) => (
                        <Link to={link.to} key={index} className='kvadrat'>
                            <img src={link.image} alt="" className='h-40' />
                            <p className='kvadrat-p'>{link.text}</p>
                        </Link>
                    ))}




                </div>
            </div>
        </div>
    )
}

export default Promotions
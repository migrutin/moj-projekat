import React, { useState } from 'react'
import laptop from '../img/laptop.jpg'
import { Link } from 'react-router-dom'
import KomponentaZaAkciju from './KomponentaZaAkciju'

const GKorner = () => {
    
    const linkoviPromenljiva = [
        {
            to:'klime',
            text:'Najbolji laptop računari u ponudi',
            image: laptop

        },
        {
            to:'klime',
            text:'Dobri laptop računari u ponudi',
            image: laptop

        },
        {
            to:'klime',
            text:'Super laptop računari u ponudi',
            image: laptop

        },
        {
            to:'klime',
            text:'Ekstra laptop računari u ponudi',
            image: laptop

        },
        {
            to:'klime',
            text:'Najbolji laptop računari u ponudi',
            image: laptop

        },
        {
            to:'klime',
            text:'Najbolji laptop računari u ponudi',
            image: laptop

        }
    ]

    const [linkovi, setLinkovi] = useState(linkoviPromenljiva)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key==='Enter') {
            event.preventDefault();
            const pojam = event.currentTarget.value;
            pretraga (pojam);
        }

    }

    const pretraga = (term:string) => {
        const filtriraniLinkovi = linkoviPromenljiva.filter((link)=> 
        link.text.toLowerCase().includes(term.toLowerCase()));
        setLinkovi(filtriraniLinkovi);
    }



    return (
        <div className='sm:w-full sm:h-200vh sm:flex ponuda'>
            <div className='div-izdvajamo-iz-ponude flex flex-col'>

            <h1 className='izdvajamo-iz-ponude'>Izdvajamo iz ponude</h1>
                <div className='w-40 h-px bg-gray-300'></div>
               <KomponentaZaAkciju></KomponentaZaAkciju>
            </div>


            <div className='akcija flex-col'>
                <h1 className='naslov'>Gaming korner</h1>
                <input type="" placeholder='Unesite pojam za pretragu' className='pretraga' 
                onKeyDown={handleKeyDown}/>

        
                 <div className='grid grid-rows-2 grid-flow-col gap-4 mt-5'>
                    {linkovi.map((link, index) => (
                    <Link to={link.to} key={index} className='kvadrat'>
                        <img src={link.image} alt="" className='h-40' />
                        <p>{link.text}</p>
                    </Link>
                ))}
                    </div>

               



                
            </div>
        </div>
    )
}

export default GKorner
import React, { useState } from 'react'
import laptop from '../img/laptop.jpg'
import { Link } from 'react-router-dom'

function GKorner() {
    
    const [linkovi, setLinkovi] = useState([
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
    ])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key==='Enter') {
            event.preventDefault();
            const pojam = event.currentTarget.value;
            pretraga (pojam);
        }

    }

    const pretraga = (term:string) => {
        const filtriraniLinkovi = linkovi.filter((link)=> 
        link.text.toLowerCase().includes(term.toLowerCase()));
        setLinkovi(filtriraniLinkovi);
    }



    return (
        <div className='sm:w-full sm:h-200vh sm:flex ponuda'>
            <div className='div-izdvajamo-iz-ponude flex flex-col'>

            <h1 className='izdvajamo-iz-ponude'>Izdvajamo iz ponude</h1>
                <div className='w-40 h-px bg-gray-300'></div>
                <Link to='/akcije' key='link-akcije' className='linkovi'>Akcije</Link>
                <div className='linija'></div>
                <Link to='/novosti' className='linkovi'>Novosti</Link>
                <div className='linija'></div>
                <Link to='/gaming-korner' className='linkovi'>Gaming korner</Link >
                <div className='linija'></div>
                <Link to='/promocije' className='linkovi'>Promocije</Link>
                <div className='linija'></div>
                <Link to='/promocije-u-prodavnicama' className='linkovi'>Promocije u prodavnicama</Link>
                <div className='linija'></div>
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
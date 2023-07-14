import React from 'react'
import { Link } from 'react-router-dom'

const KomponentaZaAkciju = () => {
  return (
    <div>
        <Link to='/akcije' key='link-akcije' className='linkovi'> Akcije </Link>
        <div className='linija'></div>
        <Link to='/novosti' key='link-novosti' className='linkovi'> Novosti</Link>
        <div className='linija'></div>
        <Link to='/gaming-korner' key='link-gamingKorner' className='linkovi'> Gaming korner </Link>
        <div className='linija'></div>
        <Link to='/promocije' key='link-promocije' className='linkovi'> Promocije </Link>
        <div className='linija'></div>
        <Link to='/promocije-u-prodavnicama' key='link-promocijeProdavnice' className='linkovi'> Promocije u prodavnicama</Link>
        <div className='linija'></div>
    </div>
  )
}

export default KomponentaZaAkciju
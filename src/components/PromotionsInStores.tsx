import React from 'react'
import promocija from '../img/prom.jpg'
import PromotionSection from './PromotionSection'


function PromotionsInStores() {
    return (
        <div className='promocije'>
            <h1 className='promocije-naslov'>Promocije u prodavnicama</h1>
            <div className='promocije-linija'></div>
            <div className='px-10'>
                <img src={promocija} alt="" className='mt-10 h-64 w-full' />
                <p className='promocije-p'>Gigatron je jedna od vodećih kompanija na tržištu tehnike u Srbiji,
                    a svoju poziciju iz godine u godinu potvrđujemo sve bogatijim asortimanom,
                    otvaranjem novih prodavnica, uključujući Megastore prodavnice i ulaganjem u kvalitet usluge.</p>

                <p className='ml-24'> U cilju da vam obezbedimo još <span className='font-bold'> bolje iskustvo kupovine i atraktivniju ponudu</span>, od sada na jednom mestu možete da saznate <span className='font-bold'>sve vezano za popuste, poklone i druge benefite</span>  koji vas čekaju samo u našim prodajnim objektima, kako biste na vreme mogli da ih iskoristite.</p>

                <p className='ml-24 mt-5 mb-10'> Pogledajte aktuelnu ponudu promocija u Gigatron prodavnicama:</p>
            </div>



           <PromotionSection></PromotionSection>



        </div>
    )
}

export default PromotionsInStores
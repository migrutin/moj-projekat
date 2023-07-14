import React from 'react'
import placanje from '../img/placanje.jpg'
import placanjeProdavnica from '../img/placanjeprodavnica.png'
import pouzecem from '../img/pouzecem.png'

const NacinPlacanja = () => {
    return (
        <div className='background-page space-y-5'>
            <h1 className='h'>Načini plaćanja</h1>


            <div className='div-section flex'>
                <img src={placanje} alt="" className='slika-2' />
                <div className='div-sec'>
                    <h1 className='div-h'>ONLINE PLAĆANJE</h1>
                    <p>Gigatron internet prodavnica vam nudi mogućnost bezbednog online plaćanja.</p>
                    <p className='mt-5'>Mogućnost online plaćanja imaju svi korisnici <span className='font-bold'>Visa, MasterCard i Maestro platnih kartica</span> . Ukoliko plaćate Visa ili MasterCard kreditnom platnom karticom koju je izdala Komercijalna banka ili Banca Intesa, moguća je i kupovina na rate (do 12 rata).</p>

                </div>

            </div>

            <div className='div-section flex'>
                <img src={placanjeProdavnica} alt="" className='slika-2' />
                <div className='div-sec'>
                    <h1 className='div-h'>ONLINE PLAĆANJE</h1>
                    <p>Gigatron internet prodavnica vam nudi mogućnost bezbednog online plaćanja.</p>
                    <p className='mt-5'>Mogućnost online plaćanja imaju svi korisnici <span className='font-bold'>Visa, MasterCard i Maestro platnih kartica</span> . Ukoliko plaćate Visa ili MasterCard kreditnom platnom karticom koju je izdala Komercijalna banka ili Banca Intesa, moguća je i kupovina na rate (do 12 rata).</p>

                </div>

            </div>

            <div className='div-section flex'>
                <img src={pouzecem} alt="" className='slika-2' />
                <div className='h-full'>
                    <h1 className='div-h'>PLAĆANJE POUZEĆEM  I PLAĆANJE OPŠTOM UPLATNICOM </h1>
                    <p>Ukoliko želite, artikle koje ste poručili putem Gigatron internet prodavnice, telefonskim putem ili u nekom od naših prodajnih objekata, možete platiti i pouzećem, to jest prilikom dostave.</p>
                    <p className='mt-5'>Takođe, svoju narudžbinu možete platiti direktnom uplatom na tekući račun kompanije Gigatron, tako što ćete prilikom naručivanja, u koraku „Način plaćanja“ odabrati opciju „Uplata na tekući račun“. Nakon što završite proces naručivanja, na vašu e mail adresu će stići uplatnica sa unapred unetim podacima za uplatu. Uplatu možete izvršiti u svim bankama i poštama u Srbiji ili putem e banking servisa banke kod koje imate tekući račun.</p>

                </div>

            </div>








        </div>
    )
}

export default NacinPlacanja
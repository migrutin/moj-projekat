
import ImageSlideComponent from './ImageSlideComponent';
import SmallImgSlide from './SmallImgSlide';
import BodyLabel from './BodyLabel';
import SpecijalniPopusti from './SpecijalniPopusti';
import Preporuke from './Preporuke';
import MontazaLink from './MontazaLink'
import MajstorLink from './MajstorLink'
import AppleSamsung from './AppleSamsung';

const BodyPart = () => {

  



    return (
        <div className=' max-w-full home'>
            <div className='flex  home-slide space-x-6'>
                <ImageSlideComponent></ImageSlideComponent>
                <SmallImgSlide></SmallImgSlide>
            </div>

            <BodyLabel></BodyLabel>

            {/* Specijalni popusti i akcije */}
            <SpecijalniPopusti></SpecijalniPopusti>

            {/* Preporucujemo za Vas */}
             <Preporuke></Preporuke>


            <MontazaLink></MontazaLink>
            <MajstorLink></MajstorLink>

           

            {/* Apple & Samsung */}
            <AppleSamsung></AppleSamsung>


        </div>
    )
}



export default BodyPart
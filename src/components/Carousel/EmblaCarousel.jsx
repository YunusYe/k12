import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import resim1 from '../../../public/siteresimleri/1.jpg'
import resim2 from '../../../public/siteresimleri/2.jpg'
import resim3 from '../../../public/siteresimleri/3.jpg'
import resim4 from '../../../public/siteresimleri/4.jpg'
import { Link } from "react-router-dom";

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({loop:true},[Autoplay()])

    return (
        <div className='embla' ref={emblaRef} >
            <div className='flex'>

                <div className='embla_slide'>
                    <Link to="/Edebiyat">
                    <img className='m-auto' src={resim1} alt="" />
                    </Link>
                </div>

                <div className='embla_slide'>
                    <Link to="/Tanzimat">
                    <img className='m-auto' src={resim2} alt="" />
                    </Link>
                </div>

                <div className='embla_slide'>
                    <Link to="/OkumaAgaci">
                    <img className='m-auto' src={resim3} alt="" />
                    </Link>
                </div>

                <div className='embla_slide'>
                    <Link to="/Okul">
                    <img className='m-auto' src={resim4} alt="" />
                    </Link>
                </div>

            </div>
        </div>

    )
}


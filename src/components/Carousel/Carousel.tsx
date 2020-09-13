import React from 'react';
import Slider from "react-slick";

type Props = {
    images: any,
}

export const Carousel:React.FC<Props> = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        delay: 1000
    };
    return (
        <div>
            <Slider {...settings}>
                {images.map((image:any) => {
                    return(
                        <div>
                            <img src={image !== null ? (image):""} alt="No Item Avaliable" width={500} height={500}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

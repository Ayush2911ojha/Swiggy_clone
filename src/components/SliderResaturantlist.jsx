import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RestaurantsCards from './RestaurantsCards';





const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
    arrows: true, // Show navigation arrows
    prevArrow: <button className="slick-prev btn-next">Previous</button>, // Custom previous arrow
    nextArrow: <button className="slick-next btn-next">Next</button> // Custom next arrow
  };
const SliderResaturantlist = ({ restaurantList}) => {
  return (
    <div className="sliderpic ">
         {/* <h2 className='offer'>offer</h2> */}
        <Slider {...settings}>
          
          {restaurantList.map((el) => (
          
            <div key={el?.id*2}>
       
                <RestaurantsCards image={el?.imageId} keyId={el?.id} name={el?.accessibility?.altText} />
                
          </div>
        ))}
        </Slider>
      </div>
  )
}

export default SliderResaturantlist;
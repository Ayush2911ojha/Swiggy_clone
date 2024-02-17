import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import menu from './menuApi'
import RestaurantsCards from './RestaurantsCards'
import DelFood from './DelFood'
import SliderResaturantlist from './SliderResaturantlist'
import SliderDelFood from './SliderDelFood'
import Filterbtn from './Filterbtn'
import Simmer from './Simmer'


import { Link } from 'react-router-dom';
import Example from './Shimmer'

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([])
  const [foodList, setfoodList] = useState(menu)
  const [AllfoodList, setAllfoodList] = useState(foodList)
  const [cta, setcta] = useState(null)

  useEffect(() => {
    callApi()
  }, [])

  const callApi = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      console.log(data)

      setcta(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      setfoodList(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      setAllfoodList(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      setrestaurantList(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  // Settings for the carousel

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
    arrows: true, // Show navigation arrows
    prevArrow: <button className='slick-prev btn-next'>Previous</button>, // Custom previous arrow
    nextArrow: <button className='slick-next btn-next'>Next</button> // Custom next arrow
  }

  {
    return (
    <>
      {restaurantList.length === 0 ? (
        <Example />
      ) : (
        <>
          <h1 className='restaurant-heading'>Whats on your mind?...</h1>
          <SliderResaturantlist restaurantList={restaurantList} />

          <h1 className='restaurant-heading'>Top restaurant chains in Lucknow</h1>
          <SliderDelFood settings1={settings1} AllfoodList={AllfoodList} />

          <div className=' widthSet'>
            <span className=' btn-filter span-btn'>Filter</span>
            <Filterbtn AllfoodList={AllfoodList} setfoodList={setfoodList} />
          </div>

          <h2 className='restaurant-heading rest-del-head'>
            Restaurants with online food delivery in Lucknow
          </h2>
          <div className='cards-container'>
            {foodList?.map(el => (
              <div key={el?.info?.id * 4}>
                <Link className='nav-link' to={`/restaurant/${el?.info?.id}`}>
                  <DelFood
                    image={el?.info?.cloudinaryImageId}
                    keyId={el?.info?.id * 5}
                    name={el?.info?.name}
                    price={el?.info?.aggregatedDiscountInfoV3?.subHeader}
                    discount={el?.info?.aggregatedDiscountInfoV3?.header}
                    area={el?.info?.areaName}
                    cuisines={el?.info?.cuisines}
                    time={el?.info?.sla?.slaString}
                    rating={el?.info?.avgRatingString}
                  />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
  }
  
}

export default Body

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RestaurantsCards from './RestaurantsCards';
import RestaurantsDetails from './RestaurantsDetails';




const RestaurantMenu = () => {
    const { restId } = useParams();
    // const { restId } = params;
    // console.log(restId)
    const [restaurantsMenu, setrestaurantsMenu] = useState([]);
    const [restaurantId, setrestaurantId] = useState(null);
    useEffect(() => {
        if (restId) {
            getMenu();
        }

    
    }, [])


    async function getMenu() {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8531448&lng=81.0195629&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);
            // const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8531448&lng=81.0195629&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);

            // const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=637904&catalog_qa=undefined&query=Sandwich&submitAction=ENTER`)

            const data = await response.json();
            setrestaurantsMenu(data?.data);
        } catch (error) {
            console.error('Error fetching menu:', error);
            // Handle the error (e.g., display an error message to the user)
        }
    }
    


    return (
        <>
           
      <RestaurantsDetails restaurantsMenu={ restaurantsMenu}/>
    </>
            )
            
}

export default RestaurantMenu
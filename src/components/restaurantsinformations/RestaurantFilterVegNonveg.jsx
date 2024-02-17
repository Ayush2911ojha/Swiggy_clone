import React, { useEffect, useState } from 'react'
import VegFood from './VegFood'
import NonVegFood from './NonVegFood'

const RestaurantFilterVegNonveg = ({
  RestaurantfilterVegNonveg,
  isFoodveg,
  title
}) => {
    const [titleItem, setTitle] = useState([]);

  const newveg = RestaurantfilterVegNonveg
  ?.slice(1)
  ?.map((el) => {
    const items = el?.card?.card?.itemCards;
    const title = el?.card?.card?.title;


 const ans = el?.card?.card?.itemCards?.filter((filterEle) => (
    filterEle?.card?.info?.isVeg == 1 &&
    filterEle?.card?.info?.itemAttribute?.vegClassifier == "VEG"
 ));

return [ans, title];
  });
  // useEffect(() => {
  //   newveg?.slice(0, newveg?.length - 2)?.forEach((el) => {
  //      console.log("ele from ",el)  
  //     handleTitle(el)
          
  //      });
    
    
  //  },[el]);
  //    function handleTitle(el) {
  //     // console.log("el[]",el[1])
  //      setTitle(el[1]);
  //   }
    


  // return (
  //   <div>
  //      hello
  //     {newveg?.slice(0, newveg?.length - 2)?.map((el) => {
  //       <div>
  //         {console.log("el[1]",el[1]) }
  //       <h1>{el[1]}</h1>
       
  //       </div> 
  //     })
  //     }
       
  // </div>
  // )
  return (
    <div>
      
      {newveg?.slice(0, newveg?.length - 2)?.map((el, index) => (
        <div key={index} >
        
        
        {!isFoodveg ? <VegFood vegetarianItems={el[0]} title={el[1]} /> :  "non veg foods"}
        </div>
      ))}
    </div>
  );
  
}

export default RestaurantFilterVegNonveg

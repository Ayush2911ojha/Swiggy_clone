import React, { useState, useEffect } from 'react'
import { img_id } from '../contants'
import { FaRupeeSign, FaStar } from 'react-icons/fa'
import vegIcon from '../images/veg.png'
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import menu from '../menuApi'



const VegFood = ({ vegetarianItems, title }) => {
  const [Hide, setHide] = useState(false);


  function hide() {
    setHide(prev => !prev);
  }

  return (
    < div className="mt-8 border-b-[14px] pb-5 border-gray-100">

      <div className='flex justify-between'>
        <h1 className='font-bold text-[1rem]'>{title}({vegetarianItems?.length})</h1>

        {Hide ? <GoChevronDown onClick={hide} size={25} /> : <GoChevronUp onClick={hide} size={25} />}
      </div>
      <div className={`${Hide ? 'hidden' : 'block'} `}>

        {vegetarianItems?.slice(0, vegetarianItems?.length)?.map?.((el, index) => (
          <div key={index}>
            <div className="flex justify-between w-full border-b-2  pt-6 pb-8">
              <ul className='flex flex-col gap-[0.2rem] text-[0.9rem] w-[80%]'>
                <img className='w-[1rem]' src={vegIcon} alt="VegIcon" />
                <h2 className='text-[0.9rem] text-blue-950'>{el?.card?.info?.name}</h2>
                <h3 className='text-[0.8rem] text-gray-400'>{el?.card?.info?.description}</h3>
                <li className='flex items-center'>
                  <FaRupeeSign className='text-gray-600' size={12} />
                  <p>{el?.card?.info?.price / 100}</p>
                </li>
              </ul>
              <img className=' rounded-lg w-[100px] h-24' src={img_id + el?.card?.info?.imageId} alt="food image" />
            </div>


          </div>
        ))}

      </div>




    </div>
  );
}
export default VegFood;
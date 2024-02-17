import React from 'react'
import { logo } from './contants'
import applogo from '../components/images/app-logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className="header">
            <div className=' left-header'>
                    <img className='header-img' src={applogo } alt="LOgo" />
            </div>

            <div className="right-header">
    
                <ul>
                 <li>  <Link  to={"/"}>Home</Link> </li>
                  <li>  <Link to={"/about"}>About Us</Link> </li>
                    <li>  <Link to={"/contact"}>Contact us</Link> </li>
                        <li className='Search'><input type="text" placeholder='What are You looking for ?' /></li>
                        <button className='search-Btn '>Search</button>
                </ul>

                </div>
                </div>
            </>
  )
}

export default Header
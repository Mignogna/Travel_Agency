import { useState } from 'react';

import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    const removeNav = () => {
        setActive('navBar')
    }
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="../Home/Home" className='logo flex'><MdOutlineTravelExplore className='icon' />Travel.</a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href='#home' className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href='#main' className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#footer" className="navLink">Contact</a>
                        </li>
                        <button className="btn"><a href="#">BOOK NOW</a></button>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar"><AiFillCloseCircle className='icon' /></div>
                </div>
                <div onClick={showNav} className="toggleNavbar"><TbGridDots className='icon' /></div>
            </header>
        </section>

    )
}

export default Navbar
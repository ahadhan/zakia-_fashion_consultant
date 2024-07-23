

import React, { useRef, useState, useEffect } from 'react';
import '../../App.css';
import Logo from '../../assets/images/logo-black.png';
import LogoWhite from '../../assets/images/logo-white.png'
import Whatsappicon from '../../assets/images/WhatsApp_icon.png';
import Hamburger from '../../assets/images/hamburger-menu.jpg';
import backArrow from '../../assets/images/back iimage.png'
import dropArrow from '../../assets/images/drop arrow.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isTransparent, setTransparent] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        // setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log(isMobileMenuOpen)
        menuRef.current.classList.toggle('show__menu');
    };




    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrolled = currentScrollPos > 0;
            setTransparent(!isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar  ${isTransparent ? 'navbar-transparent ' : ''} nav-shadow fixed top-0 w-full h-[fit] leading-[80px] flex items-center justify-center z-40 px-4  `}>
            <div className="container w-full max:w-[1200px] items-center justify-between max-md:flex ">
                <div className={`${isTransparent ? "w-[15vw]" : "w-[12vw]"} max-md:w-[40vw] items-center m-auto  max-md:mt-0 max-md:ml-24 transition `}>
                    <img src={isTransparent ? Logo : LogoWhite} alt="Logo" />
                </div>

                <div className={`menu  ${isMobileMenuOpen ? 'show__menu' : 'menu'}`} ref={menuRef}>
                    <ul className='flex items-center justify-around w-[50%] m-auto gap-20 font-[600]' >
                        <button className='max-md:block hidden ml-[-5rem]' onClick={toggleMenu}><img src={backArrow} className='invert' alt="" width={20} /></button>
                        <li>
                            <Link to="/" className='focus:text-secondaryHeading'>
                                <button className='menuItem hover:underline decoration-solid ' style={{ fontFamily: "Montserrat" }}>Home</button>
                            </Link>
                        </li>
                        <li className='relative group'>
                            <Link to="#" className='focus:text-secondaryHeading'>
                                <button className=' menuItem hover:underline decoration-solid flex items-center gap-2' onClick={toggleDropdown} style={{ fontFamily: "Montserrat" }}>
                                    Services <img src={dropArrow} className={`${isTransparent ? "" : "invert"} `} alt="Dropdown Arrow" width={10} />
                                </button>
                            </Link>
                            <ul className={`dropdown-menu absolute right-[-58px] top-10 w-40 ${isTransparent ? "bg-white" : "bg-blackNav"} shadow-lg rounded-lg transition-all duration-300 text-center ${isDropdownOpen ? 'opacity-50 ' : 'opacity-0'} z-60 `}>
                                <Link to="/fashion"><li className=" dropdown-item  max-md:bg-blue text-[15px] hover:bg-gray-900 hover:text-gold hover:cursor-pointer" style={{ fontFamily: "Montserrat" }}>Fashion</li></Link>
                                <Link to="/modeling"><li className=" dropdown-item max-md:bg-blue text-[15px] hover:bg-gray-900 hover:text-gold hover:cursor-pointer" style={{ fontFamily: "Montserrat" }}>Modeling</li></Link>
                                <Link to="/pageant"><li className=" dropdown-item  max-md:bg-blue text-[15px] hover:bg-gray-900 hover:text-gold hover:cursor-pointer" style={{ fontFamily: "Montserrat" }}>Pageant</li></Link>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about" className='focus:text-secondaryHeading'>
                                <button className='menuItem hover:underline decoration-solid' style={{ fontFamily: "Montserrat" }}>About</button>
                            </Link>
                        </li>
                        

                        <li className='relative group'>
                            <Link to="#" className='focus:text-secondaryHeading'>
                                <button className='menuItem hover:underline decoration-solid flex items-center gap-2' onClick={toggleDropdown} style={{ fontFamily: "Montserrat" }}>
                                    Gallery <img src={dropArrow} className={`${isTransparent ? "" : "invert"} `} alt="Dropdown Arrow" width={10} />
                                </button>
                            </Link>
                            <ul className={`dropdown-menu absolute right-[-58px] top-10 w-40 ${isTransparent ? "bg-white" : "bg-blackNav"} shadow-lg rounded-lg transition-all duration-300 text-center ${isDropdownOpen ? 'opacity-50 ' : 'opacity-0'} z-60 `}>
                                <Link to="/fashiongallery"><li className=" dropdown-item  max-md:bg-blue text-[15px] hover:bg-gray-900 hover:text-gold hover:cursor-pointer" style={{ fontFamily: "Montserrat" }}>Fashion</li></Link>
                                <Link to="/modelinggallery"><li className=" dropdown-item max-md:bg-blue text-[15px] hover:bg-gray-900 hover:text-gold hover:cursor-pointer" style={{ fontFamily: "Montserrat" }}>Modeling</li></Link>
                                <Link to="/pageantgallery"><li className=" dropdown-item  max-md:bg-blue text-[15px] hover:bg-gray-900 hover:text-gold hover:cursor-pointer" style={{ fontFamily: "Montserrat" }}>Pageant</li></Link>
                            </ul>
                        </li>

                        <li>
                            <Link to="/contact" className='focus:text-secondaryHeading'>
                                <button className='menuItem hover:underline decoration-solid' style={{ fontFamily: "Montserrat" }}>Contact</button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex gap-5 items-center hover:cursor-pointer '>
                    <span className='hidden max-md:block max-md:'>
                        <img src={Hamburger} onClick={toggleMenu} alt="Menu" width={30} />
                    </span>
                </div>
            </div>

            <div className='whatsapp w-[3vw] fixed bottom-20 right-10 hover:scale-105 hover:cursor-pointer max-md:w-[12vw]'>
                <img src={Whatsappicon} className='w-full' alt="WhatsApp" />
            </div>
        </header>
    );
};

export default Navbar;

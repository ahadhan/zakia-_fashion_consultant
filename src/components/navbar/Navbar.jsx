import React, { useRef, useState, useEffect } from 'react'
import '../../App.css'
import Logo from '../../assets/images/logo-white.png'
import Whatsappicon from '../../assets/images/WhatsApp_icon.png'

const Navbar = () => {

    const [isTransparent, setTransparent] = useState(true);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu');
    }



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
        <header className={`navbar ${isTransparent ? 'navbar-transparent' : ''} nav-shadow fixed top-0 w-full h-auto leading-[80px] text-white flex items-center mb-8 z-40`}>

            <div className="container mx-4 flex items-center justify-between">

            <div className=' w-[10%] items-center max-md:ml-0 '>
                    <img src={Logo} alt="" />
                </div>

                <div className='menu mr-16 mb-4' ref={menuRef} onClick={toggleMenu}>
                    <ul className='flex items-center justify-between gap-10'>
                        <button className='max-md:block'><i className="ri-menu-2-line"></i></button>

                        <li> <a className='   focus:text-secondaryHeading  ' href="#about"> <button className='  hover:underline decoration-solid'> About Us</button> </a> </li>
                        <li> <a className='   focus:text-secondaryHeading  ' href="#services"><button className=' hover:underline decoration-solid'>  Services </button> </a> </li>
                        <li> <a className='   focus:text-secondaryHeading  ' href="#review"> <button className='  hover:underline decoration-solid'> Gallery </button> </a> </li>

                    </ul>
                </div>
                

                <div className='mr-16 grid grid-rows-1 items-center'>
                    
                        <img src={Whatsappicon}  alt="" width={50}/>
                        {/* <p>contact here</p> */}
                    
                </div>

            </div>


        </header>

        // <header id='header' className={`nav-shadow  fixed top-0 w-full h-auto leading-[80px] flex items-center mb-8  bg-opacity-100 z-40 `}>
        //             <div className="container">
        //                 <div className="flex items-center justify-between">
        //                     {/* {++++++++++++logo ++++++} */}

        //                     <div className='flex items-center gap-[10px] text-align-center'>
        //                         <span className='w-[115px] max-sm:w-[80px] h-[75px]  text-[18px] font-[500] rounded-full flex items-center justify-center '>
        //                             {/* <img src={themeMode ? Logolight : LogoName} alt="" /> */}
        //                         </span>

        //                     </div>

        //                     {/* {++++++++++++logo end ++++++} */}
        //                     {/* {++++++++++++Menu start ++++++} */}

        //                     <div className='menu' ref={menuRef} onClick={toggleMenu}>
        //                         <ul className='flex items-center justify-between gap-10'>
        //                             <button className='max-md:block'><i className="close max-md:block ri-close-line"></i></button>
        //                             <li> <a className=' font-[500]   focus:text-secondaryHeading  ' href="#home" > <button className='focus:font-[600] hover:underline decoration-solid'>Home </button> </a>  </li>
        //                             <li> <a className=' font-[500]   focus:text-secondaryHeading  ' href="#services"><button className='focus:font-[600] hover:underline decoration-solid'>  Services </button> </a> </li>
        //                             <li> <a className=' font-[500]   focus:text-secondaryHeading  ' href="#about"> <button className='focus:font-[600] hover:underline decoration-solid'> About </button> </a> </li>
        //                             <li> <a className=' font-[500]   focus:text-secondaryHeading  ' href="#portfolio"> <button className='focus:font-[600] hover:underline decoration-solid'> Projects </button> </a> </li>
        //                             <li> <a className=' font-[500]   focus:text-secondaryHeading  ' href="#review"> <button className='focus:font-[600] hover:underline decoration-solid'> Reviews </button> </a> </li>
        //                             <li> <a className=' font-[500]   focus:text-secondaryHeading  ' href="#contact"> <button className='focus:font-[600] hover:underline decoration-solid'> Contact Us </button> </a> </li>
        //                             {/* <li>
        //                                 <div className='flex max-md:flex-col gap-3'> */}
        //                                     {/* <Link to='/ordernow'> <button className='button flex items-center gap-2 text-white bg-buttonColor font-[400] p-2 rounded-[8px] max-h-[45px]  max-md:w-fit hover:bg-smallTextColor hover:text-white hover: font-[500] ease-in duration-300'>
        //                                 <i className="ri-book-2-fill"></i><a href="https://join.skype.com/invite/peT5gO7lOD3E" className='font-[400]'>Book my Order</a>
        //                             </button>
        //                             </Link> */}

        //                                 {/* <button className='button flex items-center gap-2 text-white bg-buttonColor font-[400] p-2 rounded-[8px] max-md:hidden max-h-[45px] max-md:w-fit 
        //                             hover:bg-smallTextColor hover:text-white hover: font-[500] ease-in duration-300'>
        //                                     <i className="ri-send-plane-fill"></i><a href="https://join.skype.com/invite/peT5gO7lOD3E" className='font-[400]'>Book a Meeting</a>
        //                                </button>
        //                                </div>
        //                             </li> */}
        //                         </ul>
        //                     </div>
        //                     {/* {++++++++++++Menu end ++++++} */}

        //                     {/* {++++++++++++Right button ++++++} */}

        //                     <div className="flex items-center gap-4">
        //                         <button className='button flex items-center gap-2 text-white bg-buttonColor font-[600] p-2 rounded-[8px] max-h-[45px] max-md:hidden max-md:w-fit 
        //                             hover:bg-smallTextColor hover:text-white hover: font-[500] ease-in duration-300'>
        //                             <i className="ri-send-plane-fill"></i><a href="https://join.skype.com/invite/peT5gO7lOD3E" className='font-[400]'>Book a Meeting</a>
        //                         </button>

        //                         {/* <Link to='/ordernow' >
        //                             <button className='button flex items-center gap-2 text-white bg-buttonColor font-[600] p-2 rounded-[8px] max-h-[45px] max-md:hidden max-md:w-fit 
        //                             hover:bg-smallTextColor hover:text-white hover: font-[500] ease-in duration-300'>
        //                                 <i className="ri-book-2-fill"></i><a href="https://join.skype.com/invite/peT5gO7lOD3E" className='font-[400]'>Book my Order</a>
        //                             </button>
        //                         </Link> */}

        //                         <span onClick={toggleMenu} className={` text-2xl text-smallTextColor md:hidden cursor-pointer`}>
        //                         <i className="ri-menu-line"></i>
        //                             </span>


        //                     </div>

        //                     {/* {++++++++++++Right button end ++++++} */}


        //                 </div>
        //             </div>



        //         </header>
    )
}

export default Navbar

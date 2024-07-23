import React from 'react'
import bannerImg from '../../assets/images/banner.jpg'
import bgImage from '../../assets/images/secImgRbg.png'
import '../../App.css'
import '../../components/Home.css'
import Sections from '../UI/Sections'

import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div id="home" className='home w-full '>
      <div className="background-container mt-24 mb-64 max-md:mb-0 max-md:h-[80vh] relative w-full m-auto">

        {/*Container for  Banner Image and Central heading */}

        <div className='absolute w-full top-40 left-0 max-md:top-10 '>
          <img className='w-full h-[60vh] max-md:h-full' src={bannerImg} alt="banner" />   {/* Banner Image*/}

          <div className="banner-heading absolute top-0 left-0 w-full h-full max-md:h-[30vh] flex items-center justify-center">
            <div className='text-center'>
              <h1 className="text-gold text-5xl font-bold max-md:text-[2rem]" style={{ fontFamily: "Playfair Display" }}>Zakia Quaderi</h1>


              <div className='w-[20%] h-[3px] bg-gold my-4 m-auto '></div>

              <p className='text-white mb-8' style={{ fontFamily: "Montserrat" }}>
                Fashion Consultant | Modeling | Pageant Coaching
              </p>

            </div>
          </div>

        </div>


        {/* Container for image card below banner */}


        <div className=" flex justify-around absolute bottom-[-24rem] max-md:top-40 h-full">
          <div className="home-headings flex gap-20 max-md:block drop-shadow-lg z-10 m-auto w-[60%] h-[60%] top-60 lg:mx-8   max-md:text-[1rem] text-center items-center">

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" items-center bg-blackNav w-[60%] m-auto text-white text-center p-4 max-md:w-full my-3 ">

              <div className='z-40  '>


                <div className="img w-full m-auto my-2">
                  <img src={bgImage} className='w-[60%] m-auto' alt="Home card Image" /> {/* Image for Card on home page */}
                </div>

                <p className='font-[400] text-[0.9rem]  max-md:w-full max-md:text-[0.8rem] mb-4' style={{ fontFamily: "Montserrat" }}>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quibusdam? </p>  {/* This tag is for paragraph or text */}

                <div className='m-auto w-fit'>
                  <Link to={"/about"}>              {/* This tag is for Link between two pages */}
                    <button className='button bg-gold text-[0.9rem] font-[500] mt-4 p-2 text-white flex items-center     
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]'>
                      About Me
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Sections />

    </div>
  )
}

export default Home

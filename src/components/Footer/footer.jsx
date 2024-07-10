import React from 'react'
import Img1 from '../../assets/images/firstImg.jpg'
import Img2 from '../../assets/images/secondImg.jpg'
import Img3 from '../../assets/images/thirdImg.jpg'
import Img4 from '../../assets/images/fourthImg.jfif'




const footer = () => {

  const Images = [Img1, Img2, Img3, Img4]


  return (
    <footer className='bg-blackNav p-16  pb-8'>

      <div className="carousel mb-8">
        <div className="flex gap-4">
          {Images && Images.map((image, index) => (
            <div key={index}>
              <img className="h-[15rem] max-w-full rounded-lg" src={image} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* footer-top */}
      <div className="container">
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Lorem ipsum, dolor sit amet
            </h2>

            <a href="#contact" >
              <button className=' button flex items-center gap-2 text-white bg-secondaryColor font-[500]  py-3 px-3 rounded-[8px] max-h-[45px]  
                            hover:bg-primaryColor hover:text-white hover: font-[500] ease-in duration-300' >
                <i className="ri-discuss-line"></i> Contact Us
              </button>
            </a>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos deleniti quidem?
            </p>
            <br />
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
              <i class="ri-copyright-line"></i> 2024 - All rights reserved by <h1 className='text-[1rem] text-secondaryHeading inline'> Zakia's Fashion Consultant. </h1>
            </p>



          </div>

        </div>

        <div>
          <ul className='flex items-center justify-center gap-10 mt-10'>
            <li>
              <a className='text-gray-200 font-[400]' href="#home">Home</a>
            </li>
            <li>
              <a className='text-gray-200 font-[400]' href="#about">About</a>
            </li>
            <li>
              <a className='text-gray-200 font-[400]' href="#services">Services</a>
            </li>
            <li>
              {/* <a className='text-gray-200 font-[400]' href="#services">Services</a> */}
            </li>
            <li>
              <a className='text-gray-200 font-[400]' href="#contact">Get Pricing!</a>
            </li>

          </ul>
        </div>
      </div>


    </footer>
  )
}

export default footer

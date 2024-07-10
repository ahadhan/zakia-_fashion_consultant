import React from 'react'
import bgImage from '../../assets/images/banner.jpg'
import '../../App.css'

const Home = () => {
  return (
    <div id="home" className='home'>
      <div className="container flex ">
        <div className="home-headings  drop-shadow-lg text-blue  z-10 lg:absolute top-60 lg:mx-16 max-md:mt-32 max-md:ml-4 max-md:text-[1rem]">
          
          <h1 
          data-aos="fade-down"
          data-aos-duration="1500"
          className='text-5xl font-[500] my-8  max-md:text-2xl'>Welcome to!</h1>
          <h2 className='text-8xl font-[600] my-4 heading text- max-md:text-5xl'>Zakia's </h2>
          <h2 className='text-5xl font-[600] my-4 '>Fashion Consultant </h2>

        </div>

        <img className='heroinImage max-md:hidden w-[100%]' src={bgImage} alt="" />

      </div>
    </div>
  )
}

export default Home

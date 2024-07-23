import React from 'react'
import '../../App.css'
import ImgfirstCard from '../../assets/images/first_card-removebg-preview.png'
import Imgseccards from '../../assets/images/secImgRbg.png'
import ImgthirdCard from '../../assets/images/pageant.png'
import Line from '../../assets/images/line.svg'

import { Link } from 'react-router-dom'

const Sections = () => {
  return (
    <div className='section  m-auto max-md:px-8 flex justify-center w-[80vw]' id='services'>

      <div className="container font-[800] m-16 text-center">
        <br />
        <br />
        <br />
        {/* Headings */}

        <div >
          <div className='max-md:text-center' >
            {/* <p className='font-[400] text-[1.3rem] text-textColor max-md:text-[1.2rem]' style={{ fontFamily: "Montserrat" }}>
              What I offer?
            </p> */}
            <h1 className='sub-heading text-[2.5rem]  text-gold max-md:text-[1.8rem] py-4' style={{ fontFamily: "Playfair Display" }}> Services
            <div className='w-[7%] h-[5px] bg-primaryColor m-auto'></div> 
            </h1>
            <p className='font-[400] text-[1rem] my-4 w-full max-md:text-[1rem]' style={{ fontFamily: "Montserrat" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, neque.
            </p>
          </div>
        </div>


        {/* first left section */}

        <div className=" w-full leftcard row px-8 bg-blackNav gap-10 flex space-around my-16  p-4 rounded-[2rem] text-left items-center relative max-md:block overflow-hidden items-center ">
          <div className="line absolute bottom-30 rotate-180 z-0 opacity-40 " >
            <img src={Line} className='z-0' alt="" />
          </div>

          <div className="col-md-4 col-lg-2  md-sm-40 bg-blackNav z-10 ">
            <div className="image  overflow-hidden round h-full w-[50vw] max-md:w-full z-50">
              <img src={ImgfirstCard} className='w-full' alt="" />
            </div>
          </div>

          <div className="font-[400] text-[1.8rem] text-white w-[50vw] m-auto max-md:text-center z-10">
            <h1 style={{ fontFamily: "Playfair display" }}>Fashion Designing</h1>
            <div className='h-[5px]  w-[30%] bg-gold max-md:m-auto max-md:my-4 '></div> <br />


            <div className=' text-[1.2rem] font-[200]' style={{ fontFamily: "Montserrat" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos voluptatem culpa quia natus molestias fuga maxime optio nisi sit!
            </div>

            <div className='max-md:m-auto  max-md:w-[55%]'>

              <Link to={"/fashion"}><button className='button bg-gold text-[0.8rem] font-[400] mt-4 p-2 text-white flex items-center gap-2 
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]'>
                Read More
              </button></Link>


            </div>
          </div>



        </div>

        {/* second card section */}

        <div className=" w-full bg-blackNav row px-8 flex space-around my-16  p-4 py-12 rounded-[2rem] text-white text-left items-center  max-md:block relative">
          <div className="line absolute top-0 left-0 w-[80%] z-0 max-md:hidden" >
            <img src={Line} alt="" />
          </div>



          <div className="font-[400] text-[1.8rem] text-white w-[40vw] m-auto max-md:text-center z-20 ">
            <h1 style={{ fontFamily: "Playfair display" }}>Modeling</h1>
            <div className='h-[5px]  w-[10%] bg-gold max-md:m-auto max-md:my-4 '></div> <br />


            <div className=' text-[1.2rem] font-[200]' style={{ fontFamily: "Montserrat" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos voluptatem culpa quia natus molestias fuga maxime optio nisi sit!
            </div>

            <div className='max-md:m-auto max-md:w-[60%]'>
              <Link to={"/modeling"}>
                <button className='button bg-gold text-[0.8rem] font-[400] mt-4 p-2 text-white flex items-center gap-2 
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]' >
                  Read More
                </button>
              </Link>

            </div>
          </div>

          <div className="col-md-4 col-lg-2 md-sm-40 bg-blackNav ">
            <div className="image  overflow-hidden round h-full w-[20vw] max-md:w-[60%] bg-blackNav m-auto">
              <img src={Imgseccards} className='w-full z-40' alt="" />
            </div>
          </div>

        </div>


        {/* third card section */}

        <div className="w-full bg-blackNav text-white row px-8 flex space-around my-16 p-4 rounded-[2rem] text-left items-center relative max-md:block overflow-hidden">
          <div className="line absolute left-0 bottom-80  z-10 w-[80%] rotate-180" >
            <img src={Line} alt="" />
          </div>

          <div className="col-md-4 col-lg-2  md-sm-40 bg-blackNav  ">
            <div className="image overflow-hidden round h-full w-[50vw] max-md:w-full bg-blackNav z-40">
              <img src={ImgthirdCard} className='w-full z-40' alt="" />
            </div>
          </div>

          <div className="font-[400] text-[1.8rem] text-white w-[50vw] m-auto max-md:text-center ">
            <h1 style={{ fontFamily: "Playfair display" }}>Pageant <div className='h-[5px] w-[13%] bg-gold max-md:m-auto max-md:my-4'></div> 
            </h1>
            
            <div className=' text-[1.2rem] font-[200] mt-8' style={{ fontFamily: "Montserrat" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos voluptatem culpa quia natus molestias fuga maxime optio nisi sit!
            </div>

            <div className='max-md:m-auto max-md:w-[55%]'>
              <Link to={"/pageant"}>
                <button className='button bg-gold text-[0.8rem] font-[400] mt-4 p-2 text-white flex items-center gap-2 
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]'>
                  Read More
                </button>
              </Link>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sections

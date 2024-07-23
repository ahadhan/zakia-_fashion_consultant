import React from 'react'
import MyselfImg from '../../assets/images/secImgRbg.png'
import fbIcon from '../../assets/images/facebook.png'
import igIcon from '../../assets/images/instagram.png'
import ytIcon from '../../assets/images/youtube.png'
import inIcon from '../../assets/images/linkedin-removebg-preview.png'

import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div id="about" className='about px-16 max-md:px-8 pt-32'>
      <br />
      <div className="container my-24 relative w-[33%] m-auto">

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="first-card items-center bg-blackNav text-white text-center p-4 max-md:w-full my-3">

          <div className='z-40 '>
            <h1 className='text-[1.6rem] max-md:text-[1.3rem] font-[600]' style={{ fontFamily: "Montserrat" }}>About Me <div className='w-[15%] h-[3px] bg-gold m-auto '></div> </h1>


            <div className="img w-[80%] m-auto my-4">       {/* you can change its width and height by w in classname */}
              <img src={MyselfImg} alt="" />                {/* Image of yourself for about section card */}
            </div>

            <div className="textinCard   font-[600] my-3 " >
              <h1 className='text-gold text-2xl my-2' style={{ fontFamily: "Playfair display" }}>Zakia Quaderi </h1>

              <p className='font-[400] text-[1rem]  max-md:w-full max-md:text-[0.8rem] mb-4' style={{ fontFamily: 'Montserrat' }}>
                Fashion Consultant | Model | Pageant Coach
              </p>
            </div>

            <div className='m-auto w-fit'>
              <Link to={"/contact"}>
                <button className='button bg-gold text-[0.9rem] font-[500] mt-4 p-3 text-white flex items-center  
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]' style={{ fontFamily: 'Montserrat' }}>
                  Contact
                </button>
              </Link>

            </div>
          </div>
        </div>

        <div className="biography mt-8">
          <h1 className='text-center text-[1.5rem] font-[600]' style={{ fontFamily: "Playfair display" }}>
            My Biography
          </h1>
          <div className='w-[15%] h-[3px] bg-gold m-auto mb-4' ></div>

          <p style={{ fontFamily: "Montserrat" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem est tempore vero reprehenderit perferendis blanditiis culpa? Temporibus, explicabo consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odio quos non adipisci voluptatem ut, eos iste earum incidunt aliquam?</p>
        </div>

        <div className="biography mt-8">
          <h1 className='text-center text-[1.5rem] font-[600]' style={{ fontFamily: "Playfair display" }}>
            My Portfolio
          </h1>
          <div className='w-[15%] h-[3px] bg-gold m-auto mb-4'></div>

          <p style={{ fontFamily: "Montserrat" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem est tempore vero reprehenderit perferendis blanditiis culpa? Temporibus, explicabo consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque odio quos non adipisci voluptatem ut, eos iste earum incidunt aliquam?</p>
        </div>


        <div className="flex items-center gap-9 mt-16 mb-12">
          <span>
            <p className='flex text-[15px] font-[600]'> Follow Me On: </p>
          </span>
          <span>
            <button className='flex items-center gap-1  font-[600] rounded max-h-[30px]' >
              <Link to="your link to facebook">                   {/* your link to facebook */}
                <img src={fbIcon} alt="facebook" width={28} />
              </Link>
            </button>
          </span>

          <span>
            <button className='flex items-center gap-1  font-[600] rounded max-h-[30px] 
                            ease-in duration-300' >
              <Link to="your link to instagram">                {/* your link to instagram */}
                <img src={igIcon} alt="instagram" width={28} />
              </Link>
            </button>
          </span>

          <span>
            <button className='flex items-center gap-1  font-[600] rounded max-h-[30px]' >
              <Link to="your link to youtube">                  {/* your link to youtube */}
                <img src={ytIcon} alt="youtube" width={32} />
              </Link>
            </button>
          </span>

          <span>
            <button className='flex items-center gap-1  font-[600] rounded max-h-[30px]' >
              <Link to="your link to linkedin">                 {/* your link to linkedin */}
                <img src={inIcon} alt="linkedin" width={19} />
              </Link>
            </button>
          </span>

        </div>

        <div className='m-auto w-fit'>
          <Link to="your link to your resume (if any)">         {/* your link to resume */}
            <button className='button  bg-blackNav text-[0.9rem] font-[500] mt-4 p-3 text-white flex items-center  
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]' style={{ fontFamily: 'Montserrat' }}>
              Resume
            </button>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default AboutUs

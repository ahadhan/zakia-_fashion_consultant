import React from 'react'
import bgImage from '../../../assets/images/first_card-removebg-preview.png'
import '../../../App.css'
import {Link} from 'react-router-dom'

const Fashion = () => {
    return (
        <div className='section px-16 max-md:px-8 flex ' id='fashion'>

            <div className="container font-[800] my-32 ">
                <br /><br /><br /><br /><br />
                {/* Headings */}

                <div>
                    <div className='text-center'>
                        <p
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            className='font-[400] text-[1.4rem] text-textColor max-md:text-[1rem]' style={{ fontFamily: "montserrat" }}>
                            Lorem ipsum dolor sit.</p>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className='sub-heading text-[2.2rem] text-gold  max-md:text-[1.8rem]' style={{ fontFamily: "Playfair display" }}>Fashion Designing</h1>
                        <div
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            className='w-[15%] h-[5px] bg-primaryColor m-auto'></div> <br />
                        <p className='font-[400] text-[1.1rem] w-[40vw] m-auto max-md:w-full max-md:text-[1rem]' style={{ fontFamily: "montserrat" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, neque.
                        </p>
                    </div>
                </div>

                <div>
                    <img className='banner max-md:w-full ' src={bgImage} alt="" />          {/* Image for Fashion service gallery */}
                </div>

                <div className="textPara w-[50vw] m-auto pt-10 max-md:w-full font-[400]">
                    <p style={{ fontFamily: "Montserrat" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam earum incidunt dolorem molestias quis similique consequatur deleniti repellendus beatae ipsa quia et eum deserunt ullam, doloribus, nam non blanditiis placeat minus cum commodi veniam! Eveniet amet molestias minima nulla accusantium harum tempora facilis, aliquid natus minus assumenda, unde mollitia consectetur itaque voluptatem beatae eaque!
                    </p>

                    <div className='m-auto w-fit'>
                        <Link to="/contact">
                            <button
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className='button bg-gold text-[0.8rem] font-[400] mt-4 p-3 text-white flex items-center  
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]'>
                                Book Now
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Fashion

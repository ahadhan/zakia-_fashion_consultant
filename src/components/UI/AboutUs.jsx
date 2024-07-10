import React from 'react'
import AboutImg from '../../assets/images/aboutimage.png'
import SecondImg from '../../assets/images/aboutus2.png'
import fbIcon from '../../assets/images/facebook.png'
import igIcon from '../../assets/images/instagram.png'

const AboutUs = () => {
    return (
        <div id="about" className='about'>

            <div className="container m-16 relative">

                <div className="w-full basis-1/2 flex max-md:block max-md:text-center ">
                    {/* <h5 data-aos="fade-right" data-aos-durantion="2000" className='text-headingColor font-[600]'>Hello World!</h5> */}

                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className={`text-headingColor font-[800] text-[1.8rem] sm:text-[40px] my-3  `}
                    >
                        <p className='font-[400] text-[1.4rem] text-textColor'> Featured case study </p>
                        <h1 className='text-[2.8rem] sub-heading text-headingPrimary'> Who we are?</h1>
                        <div className='w-[30%] h-[5px] bg-primaryColor max-md:m-auto'></div> <br />
                        <p className='font-[400] text-[1.1rem] w-[40vw] max-md:w-full '>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti, eos eius voluptatibus perspiciatis voluptates magni! Suscipit mollitia cumque id quasi odio iusto minima itaque debitis et sint doloremque blanditiis explicabo, esse fuga fugiat ipsa reprehenderit fugit sed, quis molestiae provident? In, fuga dolor! Laboriosam!
                        </p>


                        <div
                            className='max-md:m-auto max-md:w-[35%]'
                        >
                            <a href="#contact">
                                <button className='button bg-primaryColor text-xl font-[300] mt-4 py-2 px-3 text-white flex items-center gap-2 
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px] '>
                                    Contact Us
                                </button>
                            </a>

                        </div>


                        <div className="flex items-center gap-9 mt-8 mb-12">
                            <span>
                                <p className='flex text-[15px] font-[600]'> Follow Us On: </p>
                            </span>
                            <span
                            //   data-aos='fade-left'
                            //   data-aos-duration='1000'
                            >
                                <button className='flex items-center gap-1  font-[600] rounded max-h-[30px]' >
                                    <a href="https://www.facebook.com/profile.php?id=100088242094302">
                                        <img className='social-icons' src={fbIcon} alt="facebook" width={28} />
                                    </a>
                                </button>
                            </span>



                            <span
                            //    data-aos='fade-left'
                            //    data-aos-duration='1000'
                            //    data-aos-delay="300"
                            >
                                <button className='flex items-center gap-1  font-[600] rounded max-h-[30px] 
                            ease-in duration-300' >
                                    <a href="https://www.instagram.com/axzotech?igsh=OWVkMTFiN2gwcnB3"       >
                                        <img className='social-icons' src={igIcon} alt="instagram" width={28} />
                                    </a>
                                </button>
                            </span>

                        </div>
                    </div>


                    <div className="basis-1/2 mt-[-4rem] max-md:mt-4 ">
                        <figure className="flex items-center justify-center max-md:w-[50%] max-md:m-auto " style={{ width: "50vw" }}>
                            {/* <img className='hero-img absolute left-100 top-10' src={windowImg} alt="logo img" style={{width:"20%"}} /> */}
                            <img className={`hero-img drop-shadow-2xl mr-[-6rem] w-[50%] max-md:w-[100%] `} src={AboutImg} alt="logo img" />
                            <img className={`hero-img drop-shadow-2xl lg:ml-[-6rem] w-[50%] max-md:w-[100%]`} src={SecondImg} alt="logo img" />
                            {/* <img className='hero-img absolute left-140' src={homeImg} alt="logo img" style={{width:"30%"}} /> */}
                            {/* <img src="" alt="" /> */}
                        </figure>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutUs

import React from 'react'
import fbIcon from '../../assets/images/facebook.png'
import igIcon from '../../assets/images/instagram.png'
import ytIcon from '../../assets/images/youtube.png'
import inIcon from '../../assets/images/linkedin-removebg-preview.png'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (

    <section id='contact' className='contact px-16 max-md:px-8 relative mt-24 pt-16'>

      <div className="container my-24">

        <div className="w-full basis-1/2 flex max-md:block max-md:text-center">

          <div className={`text-headingColor font-[800] text-[1.8rem] sm:text-[40px] my-8 text-center`}>
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              className='font-[400] text-[1.2rem] text-textColor max-md:text-[1.2rem]' style={{ fontFamily: "Montserrat" }}> Connect with me </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className='text-[2.2rem] text-gold max-md:text-[1.8rem] ' style={{ fontFamily: "Playfair display" }}> Contact <div className='w-[10%] h-[5px] bg-primaryColor m-auto mb-4'></div></h1>
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              className='font-[400] text-[1.1rem] w-[40vw] max-md:w-full max-md:text-[1rem]' style={{ fontFamily: "Montserrat" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti, eos eius voluptatibus perspiciatis voluptates magni! Suscipit mollitia cumque id quasi odio iusto minima itaque debitis et sint doloremque blanditiis explicabo, esse fuga fugiat ipsa reprehenderit fugit sed, quis molestiae provident? In, fuga dolor! Laboriosam!
            </p>

            <div className="flex items-center gap-9 mt-16 mb-12 w-[35%] max-md:w-[80%] m-auto">

              <span>
                <button className='flex items-center gap-1 font-[600] rounded max-h-[30px]' >
                  <Link to="link to the facebook">
                    <img    src={fbIcon} alt="facebook" width={35} />
                  </Link>
                </button>
              </span>

              <span>
                <button className='flex items-center gap-1  font-[600] rounded max-h-[30px] 
                            ease-in duration-300' >
                  <Link to="link to the instagram"       >
                    <img    src={igIcon} alt="instagram" width={35} />
                  </Link>
                </button>
              </span>

              <span>
                <button className='flex items-center gap-1  font-[600] rounded max-h-[30px]' >
                  <Link to="link to the youtube">
                    <img    src={ytIcon} alt="youtube" width={40} />
                  </Link>
                </button>
              </span>

              <span>
                <button className='flex items-center gap-1  font-[600] rounded max-h-[30px]' >
                  <Link to="link to the linkedin">
                    <img    src={inIcon} alt="facebook" width={22} />
                  </Link>
                </button>
              </span>

            </div>
          </div>


          <div className={`w-full h-auto py-8  basis-1/2 z-10 md:mt-0 md:w-1/2 lg:flex items-center px-4 lg:px-8 rounded-[15px] bg-blackNav ml-16 max-md:mx-0 `}>

            <form className='w-full h-fit-content' action="https://getform.io/f/nbdoqzka" method="POST">
              <h1 className={`text-gold py-4 text-[1.8rem] font-[500] text-center my-2`} style={{fontFamily: "Montserrat"}}> Registration</h1>
              <div className="mb-5">
                <input type="text" required name='name' placeholder='Your name' className='w-full p-3 focus:outline-none rounded-[5px]' />
              </div>
              <div className="mb-5">
                <input type="email" required name='email' placeholder='Your email' className='w-full p-3 focus:outline-none rounded-[5px]' />
              </div>
              <div className="mb-5">
                <input type="text" name='number' placeholder='Your phone number' className='w-full p-3 focus:outline-none rounded-[5px]' />
              </div>
              <div className="mb-5">
                <textarea type="text" required name='message' rows={5} placeholder='How can we help you?' className='w-full p-3 focus:outline-none rounded-[5px]' />
              </div>
              <button className='w-full p-3 bg-gold focus:outline-none rounded-[5px]  text-[1.2rem] text-white  hover:bg-secondaryColor text-center ease-linear duration-150'>
                Submit
              </button>     {/* You can run any function on the submit button click according to your need. */}
            </form>

          </div>
        </div>
      </div>


    </section>
  )
}

export default Contact

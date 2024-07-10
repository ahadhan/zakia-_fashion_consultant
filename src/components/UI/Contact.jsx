import React from 'react'
import Fb from '../../assets/images/facebook.png'

const Contact = () => {
  return (

    <section id='contact' className='contact'>
      
      <div className="container m-16 relative">

      <div className="w-full basis-1/2 flex max-md:block max-md:text-center ">

                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className={`text-headingColor font-[800] text-[1.8rem] sm:text-[40px] my-3  `}
                    >
        <p className='font-[400] text-[1.4rem] text-textColor'> Connect with us </p>
        <h1 className='text-[2.8rem] sub-heading text-headingPrimary'> Contact Us</h1>
        <div className='w-[30%] h-[5px] bg-primaryColor max-md:m-auto'></div> <br />
            <p className='font-[400] text-[1.1rem] w-[40vw] max-md:w-full '>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti, eos eius voluptatibus perspiciatis voluptates magni! Suscipit mollitia cumque id quasi odio iusto minima itaque debitis et sint doloremque blanditiis explicabo, esse fuga fugiat ipsa reprehenderit fugit sed, quis molestiae provident? In, fuga dolor! Laboriosam!
                        </p>
          
          </div>

          <div className={`w-full h-auto py-8  basis-1/2 z-10 md:mt-0 md:w-1/2 lg:flex items-center px-4 lg:px-8 rounded-[15px] gradientColor mx-8 max-md:mx-0 `}>

            <form className='w-full h-fit-content' action="https://getform.io/f/nbdoqzka" method="POST">
              <h1 className={`text-white py-4 text-[1.8rem] font-[500] text-center my-2  `}> Get Connect With Us!</h1>
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
              <button className='w-full p-3 bg-secondaryColor focus:outline-none rounded-[5px]  text-[1.2rem] text-white  hover:bg-primaryText text-center ease-linear duration-150'>
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>


      
    </section>
  )
}

export default Contact

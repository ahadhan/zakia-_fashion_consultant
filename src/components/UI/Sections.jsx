import React from 'react'
import '../../App.css'
import ImgfirstCard from '../../assets/images/first card.jpg'
import Imgseccards from '../../assets/images/secImg.png'
import ImgthirdCard from '../../assets/images/pageant.png'
import Line from '../../assets/images/line.svg'

const Sections = () => {
  return (
    <div className='section' id='section'>

      <div className="container font-[800] m-16">
<hr />
<br />
<br />
        {/* Headings */}

        <div >
          <div className='max-md:text-center' >
            <p className='font-[400] text-[1.4rem] text-textColor'>
              What we offer?
            </p>
          <h1 className='sub-heading text-[2.8rem]  text-headingPrimary'>Our Services!</h1>
          <div className='w-[15%] h-[5px] bg-primaryColor max-md:m-auto'></div> <br />
                        <p className='font-[400] text-[1.1rem] w-[40vw] max-md:w-full '>
                        Here are the services that we offer to our customers.
                        </p>

        </div>
          </div>


        {/* first left section */}

        <div className="leftcard row px-8 flex space-around my-16 mx-8 p-4 rounded-[2rem] text-left items-center relative max-md:block ">
          <div className="line absolute top-0 " >
            <img src={Line} alt="" />
          </div>

          <div className="col-md-4 col-lg-2  md-sm-40 bg-cardBg ">
            <div className="image  overflow-hidden round h-full w-[50vw] max-md:w-full bg-cardBg">
              <img src={ImgfirstCard} className='w-full' alt="" />
            </div>
          </div>

          <div className="font-[400] text-[1.8rem] text-black w-[50vw] m-auto max-md:text-center ">
            <h1 style={{ fontFamily: "Playwrite GB S" }}>Fashion Designing</h1>
            <div className='h-[5px] mt-4 w-[50%] bg-secondaryColor max-md:m-auto max-md:my-4 '></div> <br />


            <div className=' text-[1.2rem] font-[200]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos voluptatem culpa quia natus molestias fuga maxime optio nisi sit!
            </div>

            <div className='max-md:m-auto max-md:w-[50%]'>
              <a href="#contact">
                <button className='button bg-primaryColor text-lg font-[400] mt-4 p-2 text-white flex items-center gap-2 
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]'>
                  Something
                </button>
              </a>

            </div>
          </div>



        </div>

        {/* second card section */}

        <div className="leftcard row px-8 flex space-around my-16 mx-8 p-4 rounded-[2rem] text-left items-center relative max-md:block ">
          <div className="line absolute bottom-0 left-40 w-[80%] max-md:hidden" >
            <img src={Line} alt="" />
          </div>



          <div className="font-[400] text-[1.8rem] text-black w-[50vw] m-auto max-md:text-center ">
            <h1 style={{ fontFamily: "Playwrite GB S" }}>Modeling</h1>
            <div className='h-[5px] mt-4 w-[25%] bg-secondaryColor max-md:m-auto max-md:my-4 '></div> <br />


            <div className=' text-[1.2rem] font-[200]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos voluptatem culpa quia natus molestias fuga maxime optio nisi sit!
            </div>

            <div className='max-md:m-auto max-md:w-[50%]'>
              <a href="#contact">
                <button className='button bg-primaryColor text-lg font-[400] mt-4 p-2 text-white flex items-center gap-2 
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]'>
                  Something
                </button>
              </a>

            </div>
          </div>

          <div className="col-md-4 col-lg-2 md-sm-40 bg-cardBg ">
            <div className="image  overflow-hidden round h-full w-[20vw] max-md:w-full bg-cardBg">
              <img src={Imgseccards} className='w-full' alt="" />
            </div>
          </div>

        </div>


        {/* third card section */}

        <div className="leftcard row px-8 flex space-around my-16 mx-8 p-4 rounded-[2rem] text-left items-center relative max-md:block ">
          <div className="line absolute top-0 w-[80%]" >
            <img src={Line} alt="" />
          </div>

          <div className="col-md-4 col-lg-2  md-sm-40 bg-cardBg ">
            <div className="image  overflow-hidden round h-full w-[50vw] max-md:w-full bg-cardBg">
              <img src={ImgthirdCard} className='w-full' alt="" />
            </div>
          </div>

          <div className="font-[400] text-[1.8rem] text-black w-[50vw] m-auto max-md:text-center ">
            <h1 style={{ fontFamily: "Playwrite GB S" }}>Pageant</h1>
            <div className='h-[5px] mt-4 w-[40%] bg-secondaryColor max-md:m-auto max-md:my-4'></div> <br />


            <div className=' text-[1.2rem] font-[200]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quos voluptatem culpa quia natus molestias fuga maxime optio nisi sit!
            </div>

            <div className='max-md:m-auto max-md:w-[50%]'>
              <a href="#contact">
                <button className='button bg-primaryColor text-lg font-[400] mt-4 p-2 text-white flex items-center gap-2 
              hover:bg-secondaryColor ease-in duration-300 rounded-[8px]'>
                  Something
                </button>
              </a>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sections

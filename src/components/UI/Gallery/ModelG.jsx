import React, { useState } from 'react'

const ModelingG = () => {

  const [selectedUrl, setSelectedUrl] = useState("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg");


  const switchImage = (id) => {
    setSelectedUrl(id)
  }

  return (
    <div id='gallery' className='gallery px-16 max-md:px-8 pt-24 mt-12'>
      <div className="heading">

        <div className={`text-black sm:text-[40px] my-3 mt-16 text-center`}>

          <br />
          <h1
            data-aos="fade-down"
            data-aos-duration="1500"
            className='text-[2.2rem] text-gold max-md:text-[1.8rem] font-[600] ' style={{ fontFamily: "Playfair display" }}>Modeling Gallery </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className='w-[10%] h-[5px] bg-primaryColor max-md:w-[35%] mb-8 m-auto'></div>
          <p
            data-aos="fade-down"
            data-aos-duration="1500"
            className='text-[1rem] w-[50%] m-auto mb-8' style={{ fontFamily: "Montserrat" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tenetur odit cumque laboriosam eum eos amet temporibus doloremque adipisci quibusdam?</p>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-2 gap-4">
        <div>
          <img class="h-auto w-full max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 gap-4 hover:cursor-pointer">
          <div>
            <img class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
          </div>


        </div>
      </div>

    </div>
  )
}

export default ModelingG

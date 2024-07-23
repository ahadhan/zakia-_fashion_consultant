import React, { useState } from 'react'

const GallerySec = () => {

  const [selectedUrl, setSelectedUrl] = useState("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg");




  const switchImage = (id) => {
    setSelectedUrl(id)
  }

  return (
    <div id='gallery' className='gallery px-16 max-md:px-8 pt-24'>
      <div className="heading">

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={`text-headingColor font-[800] text-[1.8rem] sm:text-[40px] my-3  `}
        >
          <hr className='bg-textColor' />
          <br />
          <h1 className='text-[2.2rem] sub-heading max-md:text-[1.8rem]' style={{ fontFamily: "Playwrite GB S" }}>Fashion Gallery</h1>
          <div className='w-[15%] h-[5px] bg-primaryColor max-md:w-[35%]'></div>  <br />
        </div>
      </div>

      <div class="grid grid-cols-2 max-md:grid-cols-2 gap-4 hover:cursor-pointer">
        <div>
          <img class="h-auto w-full max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src={selectedUrl} alt="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <img id='img-1' class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out	" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </div>
          <div>
            <img id='img-2' class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
          </div>
          <div>
            <img id='img-3' class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
          </div>
          <div>
            <img id='img-4' class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br /><hr />
      <br />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={`text-headingPrimary font-[800] text-[1.8rem] sm:text-[40px] my-3  `}
      >

        <br />
        <h1 className='text-[2.2rem] sub-heading max-md:text-[1.8rem]' style={{ fontFamily: "Playwrite GB S" }}>Modeling Gallery</h1>
        <div className='w-[15%] h-[5px] bg-primaryColor max-md:w-[35%]'></div>  <br />
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


      <br />
      <br />
      <hr />
      <br />

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={`text-headingPrimary font-[800] text-[1.8rem] sm:text-[40px] my-3  `}
      >

        <br />
        <h1 className='text-[2.2rem] sub-heading max-md:text-[1.8rem]' style={{ fontFamily: "Playwrite GB S" }}>Pageant Gallery</h1>
        <div className='w-[15%] h-[5px] bg-primaryColor max-md:w-[35% ]'></div>  <br />
      </div>

      <div class="grid grid-cols-2 max-md:grid-cols-2 gap-4 hover:cursor-pointer">
        <div>
          <img class="h-auto w-full max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:scale-105 duration-300 ease-in-out" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default GallerySec

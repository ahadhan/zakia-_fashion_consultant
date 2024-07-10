import React from 'react'
import { Gallery } from "react-grid-gallery";

const GallerySec = () => {


  return (
    <div className='m-16'>
      <div className="heading">

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={`text-headingColor font-[800] text-[1.8rem] sm:text-[40px] my-3  `}
        >
          <hr className='bg-textColor' />
          <br />
          <h1 className='text-[2.8rem] sub-heading'>Fashion Gallery</h1>
          <div className='w-[50%] h-[5px] bg-primaryColor'></div>  <br />
          </div>
      </div>


      <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
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
        <h1 className='text-[2.8rem] sub-heading'>Modeling Gallery</h1>
        <div className='w-[50%] h-[5px] bg-primaryColor'></div>  <br />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

        <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
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
        <h1 className='text-[2.8rem] sub-heading'>Pageant Gallery</h1>
        <div className='w-[50%] h-[5px] bg-primaryColor'></div>  <br />
      </div>

      <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
          </div>
        </div>
      </div>








      {/* <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
      className="rounded-box" />
  </div>
</div> */}
    </div>
  )
}

export default GallerySec

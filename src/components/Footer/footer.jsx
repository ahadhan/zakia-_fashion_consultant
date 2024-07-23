import React from 'react'
import copyright from '../../assets/images/copyright.png'




const footer = () => {

 
  return (
    <footer className='bg-blackNav p-16 pb-8 mt-16'>

      
          <div className='text-center'>
           
            <br />
            <p className='text-gray-300 center leading-7 mt-4 sm:mt-0'>
            <img src={copyright} className='invert inline ' width={25} alt="" /> 2024 - All rights reserved by <h1 className='text-[1rem] text-secondaryHeading inline'> Zakia's Fashion Consultant. </h1>
            </p>



          </div>


     

       




    </footer>
  )
}

export default footer

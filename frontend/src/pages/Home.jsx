import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';

const Home = () => {
  return <>
  {/* ========== hero section============*/}
  <>
  <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] item-center justify-between'>

        {/*========= hero content ===========*/}
        <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
            med:leading-[70px]'>
              We help patients live a healthy, longer life.
            </h1>
            <p className='text__para'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum."
            </p>
            <button className='btn'>Request an Appointment</button>
          </div>
          {/*=========== hero counter ============*/}
          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className='text-[36px] leading[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                30+
              </h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>
                <p className='text__para'>Years of Experience</p>
              </span>
            </div>
            
            <div>
              <h2 className='text-[36px] leading[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                15+
              </h2>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>
                <p className='text__para'>Clinic Location</p>
              </span>
            </div>

            <div>
              <h2 className='text-[36px] leading[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                100%
              </h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>
                <p className='text__para'>Patient Satisfaction</p>
              </span>
            </div>

            
          </div>
        </div>
        {/*========= hero content ===========*/}
      <div className='flex gap-[30px] justify-end'>
        <div>
          <img src={heroImg01} alt=''/>
        </div>
        <div>
          <img src={heroImg02} alt='' className='w-full mb-[30px]'/>
          <img src={heroImg01} alt='' className='w-full mb'/>
        </div>
      </div>
      </div>
    </div>

  </section>
  </>
  </>
}

export default Home
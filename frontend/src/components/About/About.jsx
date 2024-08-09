import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[50px] lg:gap-[130px]">
          {/* ==========about img ============== */}
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            <img src={aboutImg} alt='' className="w-full h-auto" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt='' />
            </div>
          </div>
          {/* ======= about content ========== */}
          <div className="flex-1 lg:w-1/2">
            <h2 className="text-[44px] leading-[54px] font-[700] text-headingColor">
              Proud to be one of the nation's best
            </h2>
            <p className="text__para">
              For 30 years in a row, U.S. News & World Report has recognized us as one of the best public hospitals in the Nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur, adipiscing elit. Quas, nemo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

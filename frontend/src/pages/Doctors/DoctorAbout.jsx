import React from 'react'
import { formatDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Mi Mach
          </span>
        </h3>
        <p className="text__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("08-04-2016")} - {formatDate("05-10-2020")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>BS from UCSD</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York</p>

          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("09-12-2020")} - {formatDate("05-05-2024")} 
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>PHD from Rice University</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York</p>

          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience 
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formatDate("09-12-2020")} - {formatDate("05-05-2024")} 
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
              Sr. Surgeon  
            </p>            
          </li>
        </ul>
      </div>

    </div>
  );
};

export default DoctorAbout;
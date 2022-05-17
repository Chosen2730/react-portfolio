import React from "react";
import { MdOutlineGraphicEq } from "react-icons/md";
import { SiNodedotjs } from "react-icons/si";
import { FcAdvertising } from "react-icons/fc";
import { skill } from "./data";

const Services = () => {
  return (
    <main className='service-main' id='service'>
      <h1 className='service-header'>Services</h1>
      <hr className='underline' />
      <div className='service-cont'>
        <div className='service one'>
          <SiNodedotjs className='icon' />
          <h2>Web Development</h2>
          <p className='service-info'>
            I build responsive and dynamic website, which you can use as a
            portfolio, to boost your online presence, for business etc.
          </p>
        </div>
        <div className='service two'>
          <MdOutlineGraphicEq className='icon' />
          <h2>Graphics/Brand Design</h2>
          <p className='service-info'>
            With so many years of experience, I develop great designs which you
            can use for any of your exterprise, to promote your brand and do all
            sort of cool things.
          </p>
        </div>
        <div className='service three'>
          <FcAdvertising className='icon' />
          <h2>Digital Marketting</h2>
          <p className='service-info'>
            A business or venture cannot prosper if the audience is not right. I
            create a channel on the web where you can reach out your service,
            idea, product, what have you to the internet community so your right
            client can locate you.
          </p>
        </div>
      </div>
      <div className='skill-section'>
        <h1 className='service-header'>My Skills</h1>
        <hr className='underline' />
        <div className='skill-icon-cont'>
          {skill.map((item, index) => {
            return (
              <div key={index} className='skill-icon'>
                <img src={item} alt='' />
              </div>
            );
          })}
        </div>
        <a
          href='https://docs.google.com/document/d/13WFgVRbY2-Fcgrl18msACLGMiI3fbo7-d47SBtr8ZEk/edit?usp=sharing'
          className='resume'
        >
          View Resume
        </a>
      </div>
    </main>
  );
};
export default Services;

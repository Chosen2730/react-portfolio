import React from "react";
import { MdOutlineGraphicEq } from "react-icons/md";
import { SiNodedotjs } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { skill } from "./../data";

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
            I build responsive and dynamic website majorly using javascript
            frameworks for companies, organizations and individuals using latest
            web technologies.
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
          <FaWordpressSimple className='icon' />
          <h2>CMS Website/blog Creation</h2>
          <p className='service-info'>
            Using tools like Wordpress, Blogger, Wix, I build content management
            websites and blogs for individuals, ecommerce, bloggers etc. to
            promote online presence, boost SEO and for other purposes.
          </p>
        </div>
      </div>
      <div className='skill-section'>
        <h1 className='service-header'>My Skills</h1>
        <hr className='underline' />
        <div className='skill-icon-cont'>
          {skill.map((item, index) => {
            const { image } = item;
            return (
              <div key={index} className='skill-icon'>
                <img src={image} alt='' />
              </div>
            );
          })}
        </div>
        <a
          href='https://drive.google.com/file/d/1lIIJi11IamY1KBzVS1QQdo0IGpQpgr64/view?usp=sharing'
          className='resume'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Resume
        </a>
      </div>
    </main>
  );
};
export default Services;

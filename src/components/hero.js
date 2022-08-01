import React from "react";
import { BsArrowRight, BsFillEyeFill } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <main className='hero'>
        <div className='hero-div first-hero'>
          <h5>- Hello,</h5>
          <h1 className='name'>I'm Simon</h1>
          <p className='short_info'>
            A Frontend developer who uses latest technologies to build
            responsive and interactive web applications and interfaces. I am
            passionate about understanding the technologies behind webbuild,
            webflow and willing to learn new stacks necessary on a job.
          </p>
          <div className='btn-container'>
            <button className='btn btn-view'>
              <h5>
                <a href='#project'> View my projects</a>
              </h5>
              <BsFillEyeFill className='eye' />
            </button>
            <button className='btn btn-hire'>
              <h5>
                <a href='#contact'>Hire me</a>
              </h5>
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className='hero-div second-hero'></div>
      </main>
    </>
  );
};
export default Hero;

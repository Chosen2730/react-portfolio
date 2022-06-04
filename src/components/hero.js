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
            A Junior React developer with skills in HTML5, CSS3, Javascript
            using some cool ES6 features, Bootstrap, etc. In the space of 2+
            years, I have collaborated with other frontend developers and
            backend developers to build cool projects.
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

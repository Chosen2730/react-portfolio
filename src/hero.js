import React from "react";
import { BsArrowRight, BsFillEyeFill } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <main className='hero'>
        <div className='hero-div first-hero'>
          <h1 className='name'>I'm Simon</h1>
          <p className='short_info'>
            Web Designer and Developer who is also good in professional Graphics
            design. My creativities enhances business growth in the labour
            market.
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
                <a href='#contact'>Hire me</a>{" "}
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

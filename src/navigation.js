import React from "react";
import { BsWhatsapp, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = ({ nav, setNav }) => {
  return (
    <>
      <nav className={`${nav ? "main-nav" : "main-nav show-back"} `}>
        <div className='nav-left nav-cont'>
          <div className='navbrand'>
            simon i.r <hr className='underline' />
          </div>
          <div className='toggle' onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineMenu /> : <AiOutlineClose />}
          </div>
        </div>
        <div
          className={`${
            nav ? "nav-mid nav-cont" : "nav-mid nav-cont show-nav-mid"
          } `}
        >
          <div className='nav-links'>
            <ul className='links'>
              <li>
                <a href='#service'>Services</a>
              </li>
              <li>
                <a href='#project'>Projects</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${
            nav ? "nav-right nav-cont" : "nav-right nav-cont show-nav-right"
          }`}
        >
          <div className='social'>
            <ul className='icons'>
              <li>
                <a href='https://wa.me/2348132157321'>
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/Robinson_Simon_'>
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href='https://github.com/Chosen2730'>
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/robinson-simon-a35bb9194/'>
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;

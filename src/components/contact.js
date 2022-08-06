import React from "react";
import { BsWhatsapp, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <main className='contact-main' id='contact'>
        <div className='form-div'>
          <h1>Let's get along!</h1>
          <p className='cont'>
            Have a website you will like to build or a design you'll like to
            own? <br /> Reach out to me via my social media handles below;
          </p>
        </div>
        <div className='socia'>
          <ul className='icons'>
            <li>
              <a
                href='https://wa.me/2348132157321'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsWhatsapp />
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/Robinson_Simon_'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Chosen2730'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/robinson-simon-a35bb9194/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href='mailto:patiencesimoniseoluwa@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </div>
      </main>
      <div className='copyright'>
        <p className='copy_p'>
          &copy; {new Date().getFullYear()} Simon I.R. All Right Reserved
        </p>
      </div>
    </>
  );
};
export default Contact;

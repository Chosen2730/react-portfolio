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
            <li>
              <a href='mailto:patiencesimoniseoluwa@gmail.com'>
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

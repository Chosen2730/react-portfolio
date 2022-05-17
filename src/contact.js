import React from "react";

const Contact = () => {
  return (
    <>
      <main className='contact-main'>
        <div className='form-div'>
          <h1>Let's get along</h1>
          <p className='cont'>
            Have a website you will like to build or a design you'll like to
            own?
          </p>
          <form action=''>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea
              name=''
              placeholder='message'
              id=''
              cols='30'
              rows='10'
            ></textarea>
            <input className='submit' type='button' value='Send Message' />
          </form>
        </div>
        <div className='map-cont'>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15834.213685088695!2d3.3691251500000003!3d7.177506499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1652644464438!5m2!1sen!2sng'
            width='600'
            height='450'
            style={{ border: 0 }}
          ></iframe>
        </div>
      </main>
      <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} Simon I.R. All Right Reserved</p>
      </div>
    </>
  );
};
export default Contact;

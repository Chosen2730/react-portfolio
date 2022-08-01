import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { testimonial } from "../data";

const Testimonials = () => {
  const [value, setValue] = useState(0);
  const { name, title, text, image } = testimonial[value];

  useEffect(() => {
    const addInterval = setInterval(() => {
      setValue((value) => {
        let newValue = value + 1;
        return checkIndex(newValue);
      });
    }, 5000);

    return () => {
      clearInterval(addInterval);
    };
  }, [value]);

  const checkIndex = (index) => {
    if (index > testimonial.length - 1) {
      return 0;
    } else if (index < 0) {
      return testimonial.length - 1;
    }
    return index;
  };

  const nextPerson = () => {
    setValue((value) => {
      let newValue = value + 1;
      return checkIndex(newValue);
    });
  };
  const prevPerson = () => {
    setValue((value) => {
      let newValue = value - 1;
      return checkIndex(newValue);
    });
  };
  return (
    <main id='testimonial'>
      <h1 className='testimonial-header'>Reviews</h1>

      <div className='testimonial-cont'>
        <div className='image-cont'>
          <img src={image} alt={name} />
        </div>
        <div className='testimonial-content'>
          <p>{text}</p>
          <div className='wrap'>
            <div className='icon-dir' onClick={prevPerson}>
              <IoIosArrowBack />
            </div>
            <div className='name-title'>
              <h4 className='test-name'>{name}</h4>
              <h6>{title}</h6>
            </div>
            <div className='icon-dir' onClick={nextPerson}>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;

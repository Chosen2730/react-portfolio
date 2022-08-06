import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { data } from "./../data";

const Projects = () => {
  return (
    <section id='project'>
      <main className='project-main'>
        <h1>Projects</h1>
        <article className='project-div'>
          {data.map((item, index) => {
            const { title, desc, url, image } = item;

            return (
              <div key={index} className='project-cont'>
                <h2>{title}</h2>
                <h6 className='little-info'>Description</h6>
                <p className='service-info'>{desc}</p>
                <div className='project-image'>
                  <img src={image} alt='' srcSet='' />
                </div>
                <h6 className='little-info'>Tools used</h6>
                <div className='role-cont'>
                  {item.role.map((role, i) => {
                    return (
                      <div className='role-item' key={i}>
                        {role}
                      </div>
                    );
                  })}
                </div>
                <div className='visit'>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    Visit site <BsBoxArrowUpRight />
                  </a>
                </div>
              </div>
            );
          })}
        </article>
      </main>
    </section>
  );
};

export default Projects;

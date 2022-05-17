import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { data } from "./data";

const Projects = () => {
  return (
    <main className='project-main'>
      <h1>Projects</h1>
      <article className='project-div'>
        {data.map((item, index) => {
          const { title, desc, url } = item;

          return (
            <div key={index} className='project-cont'>
              <h2>{title}</h2>
              <h6 className='little-info'>Decription</h6>
              <p className='service-info'>{desc}</p>
              <h6 className='little-info'>Role</h6>
              <div className='role-cont'>
                {item.role.map((role, i) => {
                  return <div key={i}>{role}</div>;
                })}
              </div>
              <div className='visit'>
                <a href={url}>
                  Visit site <BsBoxArrowUpRight />
                </a>
              </div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default Projects;

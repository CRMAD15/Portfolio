
import "./experience.css"
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'

const Experience = () => {


  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light" >Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light" >Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light" >Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light" >Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />

              <div>
                <h4>React</h4>
                <small className="text-light" >Intermediate</small>
              </div>

            </article>

          </div>

        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light" >Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Expressjs</h4>
                <small className="text-light" >Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Mongo</h4>
                <small className="text-light" >Intermediate</small>
              </div>

            </article>


          </div>
        </div>
      </div>

    </section>
  );
}

export default Experience;

import React, { useState } from 'react';
import '../stylesheets/App.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SliderDesktop = (props) => {
  const [x, setX] = useState(0);
  const projectSection = document.querySelector('.projects_wrapper');
  const heroSection = document.querySelector('.hero_wrapper');
  const leftArrow = document.querySelector('#goLeft')
  let paddingL = props.paddingLeft;

  const displayPadding = () => {
    projectSection.style.paddingLeft = paddingL + 'px';
    projectSection.style.width =
      projectSection.offsetWidth + heroSection.offsetLeft + 'px';
  };

  const hidePadding = () => {
    projectSection.style.paddingLeft = 0 + 'px';
  };
  
  const addLeftArrow = () => {
    leftArrow.classList.remove('hidden')
  }

  const removeLeftArrow = () => {
    leftArrow.classList.add('hidden')
  }

  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (projectsJSX.length - 1));
      hidePadding();
      addLeftArrow();

    } else if (x === -100) {
      setX(x + 100);
      displayPadding();
      removeLeftArrow();
  
    } else {
      setX(x + 100);
      hidePadding();
      addLeftArrow();    
    }
  };

  const goRight = () => {
    if (x === -100 * (projectsJSX.length - 1)) {
      setX(0);
      displayPadding();
      removeLeftArrow();

    } else {
      setX(x - 100);
      hidePadding();
      addLeftArrow();    }
  };

  const projectsJSX = props.projects.map((project, index) => {
    return (
      <div
        key={index}
        className="slide flip"
        style={{ transform: `translateX(${x}%)` }}
      >
        <div className="flip_card">
          <div className="flip_card-front" style={{ backgroundColor: `${project.color}` }}>
          <img
            src={project.image.front}
            alt={project.name}
            className="front_image"
          />
        </div>
        <div className="flip_card-back">
          <div className="back_content">
           <img
              src={project.image.back}
              alt={project.name}
              className="back_content-image"
            />
            <div className="back_content-details">
              <p className="details_name">{project.name}</p>
              <p className="details_language">{project.language}</p>
              <p className="details_description">{project.description}</p>
              <div className="details_buttons">
                <button className="details_buttons-github">
                  <a
                    href={project.url.github}
                    alt="Check repository"
                    className="button"
                  >
                    Repository
                  </a>
                </button>
                <button className="details_buttons-website">
                  <a
                    href={project.url.website}
                    alt="Check project"
                    className="button"
                  >
                    Website
                  </a>
                </button>
              </div>
            </div>
            <a
              href={project.url.websiteAlt || project.url.website}
              alt="Check project"
              className="link"
              ><img
              src={project.image.icon}
              alt={project.name}
              className="back_content-icon"
            /></a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="slider">
      {projectsJSX}
      <button id="goLeft" onClick={goLeft} className="hidden">
        <IoIosArrowBack />
      </button>
      <button id="goRight" onClick={goRight}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default SliderDesktop;

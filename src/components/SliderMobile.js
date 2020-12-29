import React, { Component } from 'react';

class SliderMobile extends Component {
  render() {
    const projectsJSX = this.props.projects.map((project, index) => {
      return (
        <div key={index} className="slider_mobile-slide" style={{ backgroundColor: `${project.color.background}` }}>
          <img
            className="mobile_project-image"
            src={project.image.front}
            alt={project.name}
          />
          <p className="mobile_project-title title" style={{ color: `${project.color.font}`}}>{project.name}</p>
          <p className="mobile_project-description" style={{ color: `${project.color.font}`}}>{project.description}</p>
          <div className="mobile_project-buttons">
            <button className="button-github">
              <a
                href={project.url.github}
                alt="Check repository"
              >
                Repository
              </a>
            </button>
            { 
              project.url.website ? 
              (
                <button className="button-website">
                  <a
                    href={project.url.website}
                    alt="Check project"
                  >
                    Website
                  </a>
                </button>
              ) : null
            }
            </div>
        </div>
      );
    });
    return <div className="slider_mobile">{projectsJSX}</div>;
  }
}

export default SliderMobile;

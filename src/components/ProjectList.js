import React, { Component } from 'react';
import SliderMobile from './SliderMobile';
import SliderDesktop from './SliderDesktop';
import Media from 'react-media';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      paddingLeft: 0 
    };
    this.setOffsetLeft = this.setOffsetLeft.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.setOffsetLeft();
    window.addEventListener('resize', this.handleResize);
  }

  setOffsetLeft() {
    this.updateWindowDimensions();
    const projectSection = document.querySelector('.projects_wrapper');
    const heroSection = document.querySelector('.hero_wrapper');
    if (projectSection) {
      projectSection.style.paddingLeft = heroSection.offsetLeft + 'px';
    }
    this.setState({ 
      addingLeft: heroSection.offsetLeft 
    });
  }

  updateWindowDimensions() {
    this.setState({ 
      width: window.innerWidth 
    });
  }

  handleResize() {
    this.setOffsetLeft();
    const projectSection = document.querySelector('.projects_wrapper');
    const heroSection = document.querySelector('.hero_wrapper');
    if (this.state.width >= 1200) {
      projectSection.style.width =
        projectSection.offsetWidth + heroSection.offsetLeft + 'px';
    }
  }

  render() {
    return (
      <Media query="(max-width: 768px)">
        {(matches) => {
          return matches ? (
            <section className="projects" id="projects">
              <SliderMobile projects={this.props.projects} />
            </section>
          ) : (
            <section className="projects" id="projects">
              <div className="projects_wrapper">
                <SliderDesktop
                  projects={this.props.projects}
                  paddingLeft={this.state.paddingLeft}
                />
              </div>
            </section>
          );
        }}
      </Media>
    );
  }
}

export default Projects;

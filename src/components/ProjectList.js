import React, { Component } from 'react';
import SliderMobile from './SliderMobile';
import SliderDesktop from './SliderDesktop';
import Media from 'react-media';

class Projects extends Component {
  render() {
    return (
      <Media query="(max-width: 767px)">
        {(matches) => {
          return matches ? (
            <section className="projects" id="projects">
              <SliderMobile projects={this.props.projects} />
            </section>
          ) : (
            <section className="projects overflow_hidden" id="projects">
              <div className="projects_wrapper">
                <SliderDesktop
                  projects={this.props.projects}
                  paddingLeft={this.props.paddingLeft}
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

import React, { Component } from 'react';
import jun_image from '../images/jun_image.jpg';
import video from '../images/jun_video.mp4';
import Stickers from './Stickers';

class About extends Component {
  constructor(props) {
    super(props);
    this.animateImage = this.animateImage.bind(this);
    this.stopAnimation = this.stopAnimation.bind(this);
  }

  animateImage() {
    const aboutImage = document.querySelector('.about_image-image');
    const aboutVideo = document.querySelector('.about_image-video');
    aboutImage.classList.add('hidden');
    aboutVideo.classList.remove('hidden')
  }

  stopAnimation() {
    const aboutImage = document.querySelector('.about_image-image');
    const aboutVideo = document.querySelector('.about_image-video');
    aboutVideo.classList.add('hidden')
    aboutImage.classList.remove('hidden');
  }

  render() {
    return (
      <section className="about" id="about">
        <Stickers />
        <div className="wrapper">
          <div className="about_image">
            <img className="about_image-image" src={jun_image} onMouseOver={this.animateImage} alt="Jun" />
            <video autoPlay muted loop className="about_image-video hidden" onMouseLeave={this.stopAnimation}>
            <source src={video} type="video/mp4" />
          </video>
          </div>
          <div className="about_info">
            <h2 className="about_info-title-1 title">
              I Enjoy Developing{' '}
              <span className="below">Awesome Digital Experiences</span>
            </h2>
            <div className="about_info-paragraph"> 
              <p>I’m Jun, a Spanish-born Chinese based in Madrid.</p>
              <p>
                After I finished my Bachelor Degree in English Translation and
                Interpreting I began teaching Chinese in{' '}
                <a
                  href="https://www.chinomadrid.com/"
                  alt="Visit Bunkyo's website"
                  className="link"
                >
                  schools
                </a>{' '}
                and associations. I have also spent some years working as a
                website assistant, where I helped Chinese and English-speaking
                customers with the conditions of their{' '}
                <a
                  href="https://www.europcar.com/"
                  alt="Visit Bunkyo's website"
                  className="link"
                >
                  car rental
                </a>
                .
              </p>
              <p>
                I have always been interested in languages, but one day I
                thought,{' '}
                <span className="italic">
                Hey, why not learning something different? How about a
                  programming language?
                </span>{' '}(It was still a language, but it was definitely something different!)
              </p>
              <p>
                And that is how I decided to challenge myself by learning how to
                code in{' '}
                <a
                  href="https://adalab.es/"
                  alt="Visit Bunkyo's website"
                  className="link"
                >
                  Adalab
                </a>
                , a bootcamp supporting women to access the tech sector.
              </p>
              <p>
                I soon realized that building the logics of a website using
                JavaScript was indeed quite similar to creating a grammatically
                correct paragraph using a non-native language or even comparable
                to coming up with strategies on a boarding game, and I
                definitely enjoyed that!
              </p>
              <p> Now I’m making my way as a front-end developer.</p>
            </div>
            <h3 className="about_info-title-2 title">
              Developing Languages, Skills and Tools
            </h3>
            <div className="about_info-paragraph">
              <p>
                I feel comfortable writing code using{' '}
                <span className="highlight">Javascript</span> and creating SPAs with{' '}
                <span className="highlight">React</span> but I’m still learning and
                I’m looking forward to learn more!
              </p>
              <p>
                I also have a solid understanding of{' '}
                <span className="highlight">HTML</span>,{' '}
                <span className="highlight">CSS</span>,{' '}
                <span className="highlight">Sass</span> and{' '}
                <span className="highlight">Bootstrap</span> and I like paying
                attention to details so that I can get a clean and maintainable
                code.
              </p>
              <p>
                I have experience working in <span className="highlight">Agile</span>{' '}
                environments (scrum framework) and using{' '}
                <span className="highlight">Git</span>,{' '}
                <span className="highlight">Gulp</span> as well as other tools such
                as Visual Studio Code, Linter, Notion, Trello and Slack.
              </p>
              <p>
                Currently, I'm working on improving my development skills by
                learning new techniques with JavaScript and I aim to growing
                into a better problem solver. I'm also interested in mobile app
                development, so I have started learning React Native.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

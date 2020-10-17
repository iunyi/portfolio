import React, { Component } from 'react';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import jun_illustration from '../images/jun_illustration.svg';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="wrapper hero_wrapper">
          <div className="hero_info">
            <ul
              className="hero_info-list"
              style={{
                color: '#23A79F',
                fontSize: '24px',
              }}
            >
              <li>
                <a href="mailto:hi@junyi.es">
                  <BsEnvelope />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/junneptune">
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a href="https://github.com/iunyi">
                  <FiGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/iunyi/">
                  <FiLinkedin />
                </a>
              </li>
            </ul>
            <h1 className="title">
              I'm Jun, a Front-End <span>Developer from Spain</span>
            </h1>
            <p className="subtitle">
              Currently writing code to build cool things!</p>
            <button>
              <a
                href="https://twitter.com/messages/compose?recipient_id=248802297&text=Aloha!"
                className="twitter-dm-button"
                data-screen-name="@junNeptune"
              >
                Let's chat!
              </a>
            </button>
          </div>
          <div className="hero_image">
            <img src={jun_illustration} alt="Jun Illustration" />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;

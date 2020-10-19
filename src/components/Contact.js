import React, { Component } from 'react';
import Media from 'react-media';
import contactImage from '../images/contact.png'
import video from '../videos/contact.mp4';

class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <div className="contact_top">
          <Media query="(max-width: 767px)">
            {(matches) => {
              return matches ? (
                <img src={contactImage} alt="Jun programming" className="contact_top-image" />
              ) : (
                <video autoPlay muted loop className="contact_top-video">
                  <source src={video} type="video/mp4" />
                </video>
              );
            }}
          </Media>
        </div>
        <div className="wrapper">
          <div className="contact_bottom">
            <h2 className="contact_title title">Let's Chat!</h2>
            <p className="contact_info">
              I’m currently looking for a job as a front-end developer but I'm always up for a good talk, if you have any questions just let me know!  You can use the form below to drop me a message or also find me on{' '}
              <a
                href="https://twitter.com/messages/compose?recipient_id=248802297&text=Aloha!"
                className="twitter-dm-button link"
                data-screen-name="@junNeptune"
              >
                Twitter
              </a>{' '}
              or by email at{' '}
              <a href="mailto:hi@junyi.es" className="link">
                hi@junyi.es
              </a>
              .
            </p>
            <form
              action="https://formspree.io/f/myybkvyq"
              method="POST"
              className="contact_form"
            >
              <label htmlFor="name" className="contact_form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Charlie Brown"
                className="contact_form-input"
              />
              <label htmlFor="email" className="contact_form-label">
                Email <span className="required"> *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="hello@waffles.com"
                className="contact_form-input no-autofill-bkg"
                required
              />
              <label htmlFor="message" className="contact_form-label">
                Message <span className="required"> *</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                className="contact_form-input textarea no-autofill-bkg"
                required
              />
              <button type="submit" className="contact_form-button">
                SEND YOUR MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <p className="footer_info">
            Designed with <FaHeart className="heart pointer" onClick={this.props.showLove} /> by{' '}
            <a href="https://twitter.com/alejandrodelpzo" className="link pointer">
              @Alejandrodelpzo
            </a>{' '}
            & developed by
            <a href="https://twitter.com/junneptune" className="link pointer">
              {' '}
              @Junyi
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;

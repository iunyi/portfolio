import React, { Component } from 'react';
import Media from 'react-media';
import { Link } from 'react-scroll';
import { Twirl as Hamburger } from 'hamburger-react'


class Header extends Component {
  constructor(props) {
    super(props);
    this.displayMenu = this.displayMenu.bind(this);
  }

  displayMenu() {
    const menu = document.querySelector('.menu_displayed');
    menu.classList.toggle('hidden');
  }

  render() {
    return (
      <Media query="(max-width: 768px)">
        {(matches) => {
          return matches ? (
            <header className="mobile_header">
              <div className="wrapper">
                <nav className="mobile_header-menu" onClick={this.displayMenu}>
                  <Hamburger size={20} color="#23a79f" className="hamburger-react" />
                  <ul className="menu_displayed hidden">
                    <li>
                      <Link to="projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="about">About me</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
          ) : (
            <header className="desktop_header">
              <div className="wrapper">
                <nav>
                  <ul className="desktop_header-menu">
                    <li>
                      <Link to="projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="about" title="about">
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" title="contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
          );
        }}
      </Media>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectList from './ProjectList';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Cursor from '../services/Cursor';
import { projectsData } from '../services/projectsData';
import getShiba from '../services/getShiba';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      projects: projectsData,
      cursorX: 0,
      cursorY: 0,
      width: 0,
      paddingLeft: 0,
      shiba: '',
     };
     this.updateWindowWidth = this.updateWindowWidth.bind(this);
     this.setOffsetLeft = this.setOffsetLeft.bind(this);
     this.handleResize = this.handleResize.bind(this);
     this.handleCursor = this.handleCursor.bind(this);
     this.setCursorPosition = this.setCursorPosition.bind(this);
     this.moveCursor = this.moveCursor.bind(this);
     this.improveLinksVisibilityOnHover = this.improveLinksVisibilityOnHover.bind(this);
     this.showLove = this.showLove.bind(this);
  }

  componentDidMount(){
    this.updateWindowWidth();
    this.setOffsetLeft();
    window.addEventListener('resize', this.handleResize);
  }

  // Slider
  updateWindowWidth() {
    this.setState({ 
      width: window.innerWidth 
    });
  }

  setOffsetLeft() {
    const projectSection = document.querySelector('.projects_wrapper');
    const heroSection = document.querySelector('.hero_wrapper');
    if (projectSection) {
      projectSection.style.paddingLeft = heroSection.offsetLeft + 'px';
    }
    this.setState({ 
      paddingLeft: heroSection.offsetLeft 
    });
  }

  handleResize() {
    this.setOffsetLeft();
    const projectSection = document.querySelector('.projects_wrapper');
    const heroSection = document.querySelector('.hero_wrapper');
    if (projectSection && this.state.width >= 1200) {
      projectSection.style.width =
        projectSection.offsetWidth + heroSection.offsetLeft + 'px';
    }
  }

  // Cursor
  setCursorPosition(e) {
    this.setState({
      cursorX: e.pageX,
      cursorY: e.pageY
    })
  }

  moveCursor() {
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => { 
      cursor.style.top = this.state.cursorY + 'px' 
      cursor.style.left = this.state.cursorX + 'px'  
    });
  }

  improveLinksVisibilityOnHover() {
    const links = document.querySelectorAll('.pointer');
    links.forEach(link=> {
      const cursors = document.querySelectorAll('.cursor');
      cursors.forEach(cursor => { 
        link.addEventListener('mouseover', () => {
          cursor.classList.add('hover-link')
        });
        link.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover-link')
        });
      })
    })
  }

  handleCursor(e) {
    this.setCursorPosition(e);
    this.moveCursor();
    this.improveLinksVisibilityOnHover();
  }

  // Shiba
  showLove() {
    getShiba().then(shibaData => {
      this.setState({
        shiba: shibaData
      })
      window.open(this.state.shiba)
    })
  }

  render() {
    return (
      <div className="App" onMouseMove={this.handleCursor}>
        <Header />
        <main>
          <Hero />
          <ProjectList projects={this.state.projects} paddingLeft={this.state.paddingLeft}/>
          <About />
          <Contact />
          <ScrollToTop />
          <Cursor />
        </main>
        <Footer showLove={this.showLove}/>
      </div>
    );
  }
}

export default App;

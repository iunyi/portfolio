import React, { Component } from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectList from './ProjectList';
import { projectsData } from '../services/projectsData';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Cursor from '../services/Cursor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      projects: projectsData,
      cursorX: 0,
      cursorY: 0,
      width: 0,
      paddingLeft: 0 
     };
     this.updateWindowWidth = this.updateWindowWidth.bind(this);
     this.setOffsetLeft = this.setOffsetLeft.bind(this);
     this.handleResize = this.handleResize.bind(this);
     this.moveCursor = this.moveCursor.bind(this);
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
  moveCursor(e) {
    this.setState({
      cursorX: e.pageX,
      cursorY: e.pageY
    })
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => { 
      cursor.style.top = this.state.cursorY + 'px' 
      cursor.style.left = this.state.cursorX + 'px'  
    });
  }

  render() {
    return (
      <div className="App" onMouseMove={this.moveCursor}>
        <Header />
        <main>
          <Hero />
          <ProjectList projects={this.state.projects} paddingLeft={this.state.paddingLeft}/>
          <About />
          <Contact />
          <ScrollToTop />
          <Cursor />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

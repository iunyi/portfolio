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
     };
     this.moveCursor = this.moveCursor.bind(this);
  }

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
          <ProjectList projects={this.state.projects} />
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

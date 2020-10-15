import React, { Component } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll } from 'react-scroll';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll() {
    animateScroll.scrollToTop();
  }

  render() {
    return (
      <div className="scrollArrow" onClick={this.scroll}>
        <MdKeyboardArrowUp />
      </div>
    );
  }
}

export default ScrollToTop;

import React, { Component } from 'react';
import bubble_1 from '../images/stickers/bubble_1.png';
import bubble_2 from '../images/stickers/bubble_2.png';
import bubble_3 from '../images/stickers/bubble_3.png';
import envelope_1 from '../images/stickers/envelope_1.png';
import envelope_2 from '../images/stickers/envelope_2.png';
import hover_1 from '../images/stickers/hover_1.png';
import hover_2 from '../images/stickers/hover_2.png';
import hover_3 from '../images/stickers/hover_3.png';
import profile_1 from '../images/stickers/profile_1.png';
import profile_2 from '../images/stickers/profile_2.png';
import profile_3 from '../images/stickers/profile_3.png';

class Stickers extends Component {
  constructor(props) {
    super(props);
    this.parallax = this.parallax.bind(this);
  }

  parallax(e) {
    const sticker = document.querySelectorAll('.sticker');

    sticker.forEach((stickerItem) => {
      const speed = stickerItem.getAttribute('data-speed');
      const x = (e.pageX * speed) / 80;
      const y = (e.pageY * speed) / 80;

      stickerItem.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  render() {
    return (
      <div className="stickers" onMouseMove={this.parallax}>
        <div className="wrapper">
          <div className="stickers_bubble sticker" data-speed="5">
            <img src={bubble_1} alt="" className="stickers_bubble_1" />
            <img src={bubble_2} alt="" className="stickers_bubble_2" />
            <img src={bubble_3} alt="" className="stickers_bubble_3" />
          </div>
          <div className="stickers_envelope sticker " data-speed="1">
            <img src={envelope_1} alt="" className="stickers_envelope_1" />
            <img src={envelope_2} alt="" className="stickers_envelope_2" />
          </div>
          <div className="stickers_hover sticker " data-speed="-1">
            <img src={hover_1} alt="" className="stickers_hover_1" />
            <img src={hover_2} alt="" className="stickers_hover_2" />
            <img src={hover_3} alt="" className="stickers_hover_3" />
          </div>
          <div className="stickers_profile sticker" data-speed="1">
            <img src={profile_1} alt="" />
            <img src={profile_2} alt="" />
            <img src={profile_3} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Stickers;

import React, { useState, useEffect } from "react";
import { useDrag } from "react-use-gesture";
import { interpolate, toCircle, toRect } from "flubber";

import { useTransition, useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
// import throttle from "lodash.throttle";
import "./styles.scss";

import {
  hoverMultiplier,
  circlePath,
  hexagonPath,
} from "../../../data/constants.json";

/**
 * @description project cards
 * @param {*} props
 */
export const DefaultCard = ({ title, description, link, className = "" }) => {
  return (
    <div className={`card_container ${className}`}>
      <div className='card_header'>
        <h2 className='card_title'>{title}</h2>
      </div>
      <div className='card_body'>
        <div className='card_description'>{description}</div>
      </div>
      <div className='card_footer'>
        <a className='card_link' href={link}>
          Play now
        </a>
      </div>
    </div>
  );
};

export const CloudCard = ({ title, description, link, startTime, endTime }) => {
  return (
    <div className='card_container cloud_card'>
      <div className='card_header'>
        <h2 className='card_title'>{title}</h2>
        <div className='card_header__rightside'>
          <p>{startTime}</p> -<p>{endTime}</p>
        </div>
      </div>
      <div className='card_body'>
        <div className='card_description'>{description}</div>
      </div>
      <div className='card_footer'></div>
    </div>
  );
};

const randomRange = (max = 400, min = -400) => {
  return Math.random() * (max - min) + min;
};

export const NodeCard = ({ title, xPosition, yPosition }) => {
  const [hover, setHover] = useState(false);

  const { path } = useSpring({
    path: hover ? 1 : 0,
  });

  const toggle = () => {
    setHover(!hover);
  };


  const interpolator = interpolate(hexagonPath, circlePath);

  return (
    <g
    //   onMouseEnter={hoverEvent}
	//   onMouseLeave={hoverLeaveEvent}
    //   {...bindDrag()}
      transform={`translate(${xPosition}, ${yPosition})`}
		className='node-card'
	  >
      <animated.path
		onClick={toggle}
	  	stroke="#000" stroke-width="2"
        fill='red'
        d={path.interpolate(interpolator)}
      />
    </g>
  );
};

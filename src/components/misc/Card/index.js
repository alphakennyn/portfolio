import React, { useState, useEffect } from "react";
import { useDrag } from "react-use-gesture";
import { interpolate, toCircle } from "flubber";

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

export const NodeCard = ({ title, radiusSize = 50 }) => {
  const [hover, setHover] = useState(false);
  const [{ xPosition, yPosition }, setPosition] = useState({
    xPosition: randomRange(),
    yPosition: randomRange(),
  });
  // const [yPosition, setYPosition] = useState(randomRange());

  const name = title.slice(0, 1).toUpperCase();

  const [items, setItems] = useState([name]);
  const transitions = useTransition(items, null, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 1 },
    enter: { transform: "translate3d(0,0,0)", opacity: 1, delay: 300 },
    leave: { transform: "translate3d(0,40px,0)", opacity: 0 },
  });

  const { path } = useSpring({
    path: hover ? 1 : 0,
    config: {
      // duration: 150
    },
  });

  // return transitions.map(({ item, props, key }) =>
  //   <animated.div key={key} style={props}>{item.text}</animated.div>
  // )
  const hoverEvent = () => {
    setHover(true);
    // setItems([title]);
    console.log(items);
  };
  const hoverLeaveEvent = () => {
    setHover(false);
    // setItems([name]);
    console.log(items);
  };

  // Set the drag hook and define component movement based on gesture data
  const bindDrag = useDrag(
    ({ down, movement: [mx, my] }) => {
      console.log(mx, my);
      setPosition({ xPosition: mx, yPosition: my });
    },
    { initial: () => [xPosition.get(), yPosition.get()] }
  );

  // const name = title.slice(0, 1).toUpperCase();
  const interpolator = toCircle(hexagonPath, 100, 100, 100);

  const realRadius = hover ? radiusSize * hoverMultiplier : radiusSize;
  const name1 = transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {item.text}
    </animated.div>
  ));
  return (
    <g
      onMouseEnter={hoverEvent}
      onMouseLeave={hoverLeaveEvent}
      {...bindDrag()}
      transform={`translate(${xPosition}, ${yPosition})`}
      style={{
        outline: "thick solid black",
      }}>
      <animated.path
        fill='red'
        className='node-card'
        d={path.interpolate(interpolator)}
      />
    </g>
  );
};

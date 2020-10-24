import React, { useState, useEffect } from 'react';
import {useTransition, animated} from 'react-spring'
import throttle from 'lodash.throttle';
import './styles.scss';

import { hoverMultiplier } from '../../../data/constants.json';

/**
 * @description project cards
 * @param {*} props
 */
export const DefaultCard = ({ title, description, link, className = '' }) => {
    return (
        <div className={`card_container ${className}`}>
          <div className="card_header">
            <h2 className="card_title">{title}</h2>
          </div>
          <div className="card_body">
            <div className="card_description">{description}</div>
          </div>
          <div className="card_footer">
            <a className="card_link" href={link}>Play now</a>
          </div>
        </div>
      );
}

export const CloudCard = ({ title, description, link, startTime, endTime }) => {
    return (
        <div className="card_container cloud_card">
          <div className="card_header">
            <h2 className="card_title">{title}</h2>
            <div className="card_header__rightside">
                <p>{startTime}</p> - 
                <p>{endTime}</p>
            </div>
          </div>
          <div className="card_body">
            <div className="card_description">{description}</div>
          </div>
          <div className="card_footer">
          </div>
        </div>
      );
}

const randomRange = (max = 400, min = -400) => {
  return Math.random() * (max - min) + min;
}

export const NodeCard = ({ title, radiusSize = 50 }) => {
  const [hover, setHover] = useState(false);
  const [xPosition, setXPosition] = useState(randomRange());
  const [yPosition, setYPosition] = useState(randomRange());


  const name = title.slice(0, 1).toUpperCase();

  const [items, setItems] = useState([name])
  const transitions = useTransition(items, null, {
    from: { transform: 'translate3d(0,-40px,0)', opacity: 1 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1, delay: 300 },
    leave: { transform: 'translate3d(0,40px,0)', opacity: 0 },
  })

  // return transitions.map(({ item, props, key }) =>
  //   <animated.div key={key} style={props}>{item.text}</animated.div>
  // )
  const hoverEvent = () => {
    setHover(true)
    setItems([...title]);
    console.log(items)
  }
  const hoverLeaveEvent = () => {
    setHover(false)
    setItems([name]);
    console.log(items)
  }
  
  // const name = title.slice(0, 1).toUpperCase();
  const realRadius = hover ? radiusSize * hoverMultiplier : radiusSize;
  const name1 = transitions.map(({ item, props, key }) => <animated.div key={key} style={props}>{item.text}</animated.div>);
  return (
    <g 
      className="node-card"
      onMouseEnter={hoverEvent}
      onMouseLeave={hoverLeaveEvent}
    >
      <circle className="node-card" cx="500" cy="500" r={realRadius}>
      </circle>
      {
        transitions.map(({ item, props, key }, index) => 
          <animated.text
          // style={"position: relative"}
          x="50%" 
          y="50%" 
          // dx={`${index}%`}
          text-anchor="middle" 
          stroke="#51c5cf" 
          key={key} 
            style={props}
          >{item}</animated.text>)
      }
      {/* <text x="50%" y="50%" text-anchor="middle" stroke="#51c5cf" stroke-width="2px">
        { name }
      </text> */}
    </g>
  )
}

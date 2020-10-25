import React from 'react';
import { DefaultCard, NodeCard } from '../misc/Card';

import projects from '../../data/projects.json';

import './styles.scss';

const fixedCoordinate = ({x, y}, size) => ([
  {
    x,
    y 
  },
  {
    x: x + size,
    y, 
  },
  {
    x: x - size,
    y,
  },
  {
    x: x + (size / 2),
    y: y + size - 25
  },
  {
    x: x - (size / 2),
    y: y - size + 25
  },
  {
    x: x + (size / 2),
    y: y - size + 25
  },
  {
    x: x - (size / 2),
    y: y + size - 25
  },
]);

const svgDimension = {
  x: window.innerWidth,
  y: window.innerHeight
}

const Page = (props) => {
  const cards = projects.map(({ id, ...rest }, index) => {
    const {x, y} = fixedCoordinate({ x: svgDimension.x/2, y: svgDimension.y/2 }, 180)[index];
    console.log(x,y)
    return <NodeCard {...rest} xPosition={x} yPosition={y} key={id}/>;
  });
  return (
    <div className="page page_projects">
      <svg height={`${svgDimension.y}`} width={`${svgDimension.x}`}>
        {cards}
      </svg>
    </div>
  );
}

export default Page;

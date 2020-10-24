import React from 'react';
import { DefaultCard, NodeCard } from '../misc/Card';

import projects from '../../data/projects.json';

import './styles.scss';

const Page = (props) => {
  const cards = projects.map(({ id, ...rest }) => <NodeCard {...rest} key={id}/>)
  return (
    <div className="page page_projects">
      <svg height="1000" width="1000">
        {cards}
      </svg>
    </div>
  );
}

export default Page;

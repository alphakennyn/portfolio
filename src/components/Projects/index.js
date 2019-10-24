import React from 'react';
import { DefaultCard } from '../misc/Card';

import projects from '../../data/projects.json';

import './styles.scss';


const Page = (props) => {
  const cards = projects.map(({ id, ...rest }) => <DefaultCard {...rest} key={id}/>)
  return (
    <div className="page page_projects">
      {cards}
    </div>
  );
}

export default Page;

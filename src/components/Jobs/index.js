import React from 'react';
import { CloudCard } from '../misc/Card';

import jobs from '../../data/jobs.json';

import './styles.scss';

export const JobV1Component = (props) => {
  const cards = jobs.map(({ id, ...rest }) => <CloudCard {...rest} key={id}/>)
  return (
    <div className="job-v1-container">
      <h2>Job Experiences</h2>
      {cards}
    </div>
  )
};

export default (props) => {
    const cards = jobs.map(({ id, ...rest }) => <CloudCard {...rest} key={id}/>)

    return (
        <div className="page page_jobs">
          { cards }
        </div>
      );
}
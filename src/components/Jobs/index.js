import React, { useState, useRef, useEffect } from 'react';
import { JobCard } from '../misc/Card';

import jobs from '../../data/jobs.json';

import './styles.scss';

const cards = jobs.map(({ id, ...rest }) => <JobCard {...rest} key={id}/>)

export default (props) => {
    return (
        <div className="page jobs">
          {cards}
        </div>
      );
}
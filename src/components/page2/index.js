import React from 'react';
import projects from '../../data/projects.json';

import './styles.scss';

/**
 * @description project cards
 * @param {*} props
 */
const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-container">
      <div className="project_header">
        <h2 className="project_title">{title}</h2>
      </div>
      <div className="project_body">
        <div className="project_description">{description}</div>
      </div>
      <div className="project_footer">
        <a className="project_link" href={link}>Play now</a>
      </div>
    </div>
  );
};


const Page = (props) => {
  const cards = projects.map(({ id, ...rest }) => <ProjectCard {...rest} key={id}/>)
  return (
    <div className="page page_projects">
      {cards}
    </div>
  );
}

export default Page;

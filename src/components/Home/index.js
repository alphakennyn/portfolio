import React from 'react';
import './styles.scss';

const DESCRIPTION = "Hi! My name is Kenny Nguyen. I'm Software Engineer from Concordia University. I enjoy travelling and climbing stuff";

const linkedin = 'https://www.linkedin.com/in/kenny-nguyen-81944989/';
const github = 'https://github.com/alphakennyn';
const ig = 'https://www.instagram.com/alphakennyn/';

const ProfileIcon = ({ img }) => ((
    <img className="image-icon" alt="Kenny Nguyen profile" src={img} />
));

const NameComponent = ({ img, name, description }) => {
  return (
    <div className='intro__container'>
      <div className='intro__container-content'>
        <ProfileIcon img={img} />
        <div className='intro__container-description'>
          <h2>{name}</h2>
          <hr />
          <p>{description}</p>
          <MediaComponent linkedin={linkedin} github={github} ig={ig} />
        </div>
      </div>
    </div>
  );
};

export const SimpleV1Component = ({ img, name, description = DESCRIPTION }) => {
  return (
      <div className="about">
        <ProfileIcon img={img} />
        <div className='intro__container-description'>
          <h2>{name}</h2>
          <hr />
          <p>{description}</p>
          <MediaComponent linkedin={linkedin} github={github} ig={ig} />
        </div>
      </div>
  );
};

const MediaComponent = ({ linkedin, github, ig }) => (
  <div className="intro__social-media">
    <a target="_blank" rel="noopener noreferrer" href={linkedin}>linkedin</a>
    <a target="_blank" rel="noopener noreferrer" href={github}>github</a>
    <a target="_blank" rel="noopener noreferrer" href={ig}>ig</a>
  </div>
)

const Page = (props) => {
  return (
    <div className="page intro">
        <NameComponent {...props} description={DESCRIPTION}/>
    </div>
  );
}

export default Page;

import React from 'react';
import './styles.scss';

const description = "Hi! My name is Kenny Nguyen. I'm Software Engineer from Concoria University. I enjoy travelling and climbing stuff";

const linkedin = 'https://www.linkedin.com/in/kenny-nguyen-81944989/';
const github = 'https://github.com/alphakennyn';
const ig = 'https://www.instagram.com/alphakennyn/';

const ProfileIcon = ({ img }) => ((
    <img className="image-icon" alt="Kenny Nguyen profile" src={img} />
));

const NameComponent = ({ img, name, description }) => {
    return (
        <div className="intro__container">
          <ProfileIcon img={img}/>
          <div className="intro__container-content">
            <h2>{name}</h2>
            <hr />
            <p>{description}</p>
          </div>
        </div>
      );
}

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
        <NameComponent {...props} description={description}/>
        <MediaComponent linkedin={linkedin} github={github} ig={ig}/>
    </div>
  );
}

export default Page;

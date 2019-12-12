import React from 'react';
import './styles.scss';

const NameComponent = ({ img, name }) => {
    return (
        <div className="intro__container">
          <img className="intro__profile-image" alt="Kenny Nguyen profile" src={img} />
          <div className="intro__container-content">
            <h2>{name}</h2>
            <hr />
            <p></p>
          </div>
        </div>
      );
}


const Page = (props) => {
  return (
    <div className="page intro">
        <NameComponent {...props}/>
    </div>
  );
}

export default Page;

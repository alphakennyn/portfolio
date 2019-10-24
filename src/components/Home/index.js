import React from 'react';
import './styles.scss';

const NameComponent = ({ img, name }) => {
    return (
        <div className="name-container">
          <img alt="Kenny Nguyen profile" src={img} />
          <h2>{name}</h2>
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

import React from 'react';
import './styles.scss';

const NameComponent = (props) => {
    return (
        <div className="name-container">
            hi
        </div>
      );
}


const Page = () => {
  return (
    <div className="page intro">
        <NameComponent />
    </div>
  );
}

export default Page;

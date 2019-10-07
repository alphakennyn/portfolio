import React from 'react';
// import './styles.scss';

const NameComponent = (props) => {
    return (
        <div className="name-container">
            hello
        </div>
      );
}


const Page = (props) => {
  return (
    <div className="page">
        <NameComponent />
    </div>
  );
}

export default Page;

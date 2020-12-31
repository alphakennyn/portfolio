import React from "react";

import "./styles.scss";

/**
 * @description project cards
 * @param {*} props
 */
export const DefaultCard = ({ title, description, link, className = "" }) => {
  return (
    <div className={`card_container ${className}`}>
      <div className='card_header'>
        <h2 className='card_title'>{title}</h2>
      </div>
      <div className='card_body'>
        <div className='card_description'>{description}</div>
      </div>
      <div className='card_footer'>
        <a className='card_link' href={link}>
          Play now
        </a>
      </div>
    </div>
  );
};

export const CloudCard = ({ title, workName, description, link, startTime, endTime }) => {
  const descriptionRender =
    description.length > 0
      ? description.map((element) => <li>{element}</li>)
      : "";

  return (
    <div className='cloud_card'>
      <div className='card_header'>
        <h2 className='card_title'>{workName}</h2>
        <div className='card_header__rightside'>
          <p>{startTime}</p> -<p>{endTime}</p>
        </div>
      </div>
      <div className='card_body'>
        <p>{title}</p>
        <div className='card_description'>
          <ul>{descriptionRender}</ul>
        </div>
      </div>
      <div className='card_footer'></div>
    </div>
  );
};

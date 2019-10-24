import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import legoImage from '../../assets/images/lego-contruction.png';
import './styles.scss';

const WIPContainer = props => {
	return (
		<div className="wip-image-container">
			<img alt="under construction!" src={legoImage} />
		</div>
	);
};

export default props => {
	return (
		<div className="page page_wip">
			<div>
				<WIPContainer />
                <div className="wip-desc">
                    <h3>Hey! my portfolio is under construction</h3>
                    <h4>In the meantime you can find me at:</h4>
                    <span>
                        <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/kenny-nguyen-81944989/"><FaLinkedinIn /></a>
                        <a target="_blank"  rel="noopener noreferrer" href="https://github.com/alphakennyn"><FaGithub /></a>
                        <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/alphakennyn/"><FaInstagram /></a>
                    </span>
                </div>
			</div>
		</div>
	);
};

import React, { useState, useRef, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'
import github from 'octonode';
import throttle from 'lodash.throttle';
// components
import LoadPage from './Loader';
import HomePage, { SimpleV1Component } from './Home';
import ProjectsPage from './Projects';
import JobsPage, {JobV1Component} from './Jobs';

import './App.scss';

const client = github.client();
const ghme = client.user('alphakennyn');

const AnimateApp = (props) => {
  const [pageIndex, setPage] = useState(1);
  const [githubInfo, setGitHub] = useState({});

  const pages = [
    {
      page: 'projects',
      component: <ProjectsPage />,
    },
    {
      page: 'jobs',
      component: <JobsPage />,
    }
  ];
  
  const transitions = useTransition(pageIndex, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1, height: '100%' },
    leave: { opacity: 0, position: 'absolute', visibility: 'hidden' },
  });

  /**
   * @description set favicon URL
   * @param {String} avatar_url 
   */
  const setFavicon = (avatar_url) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = avatar_url;
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  
  /**
   * @description use this for setup github items
   */
  useEffect(() => {
    // window.addEventListener('click', throttle(handleScroll, 1000));
    ghme.info((err, body, headers) => {
      if (err) {
        return;
      }
      const {
        avatar_url,
        html_url,
        hireable,
        created_at,
        name,
        login,
        location,
        repos_url,
      } = body;

      setGitHub({
        img: avatar_url,
        url: html_url,
        hireable: !!hireable,
        created_at,
        name,
        login,
        location,
      });
      setFavicon(avatar_url);
    });
  }, []);

  return (
    // <div className="Kenny-Nguyen" onWheel={(e) => throttle(handleScroll(e), 1000, { trailing: true, leading: true })}>
    <div className="Kenny-Nguyen intro">
      <div className="basic-template">
        <div className="template-container">
          <SimpleV1Component { ...githubInfo }/>
          <JobV1Component />
        </div>
      </div>
    </div>
  );
}

export default AnimateApp;

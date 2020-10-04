import React, { useState, useRef, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'
import github from 'octonode';
import throttle from 'lodash.throttle';
// components
import LoadPage from './Loader';
import HomePage from './Home';
import ProjectsPage from './Projects';
import JobsPage from './Jobs';

import './App.scss';

const client = github.client();
const ghme = client.user('alphakennyn');

const AnimateApp = (props) => {
  const [pageIndex, setPage] = useState(1);
  const [githubInfo, setGitHub] = useState({});

  const pages = [
    {
      page: 'loading',
      component: <LoadPage />,
    },
    {
      page: 'home',
      component: <HomePage { ...githubInfo }/>,
    },
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

  const handleScroll = () => {
    // e.preventDefault();
    let copyPageIndex = pageIndex
    console.log('pageIndex => ', pageIndex);
    console.log('pages.length => ', pages.length);
    const i = pageIndex >= pages.length - 1 ? 0 : ++copyPageIndex;
    setPage(i);
  }

  const handleScrollWithThrottle = () => throttle(handleScroll, 300);

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

  useEffect(() => {
    window.addEventListener('click', handleScrollWithThrottle);
    // window.addEventListener('scroll', handleScrollWithDebounce);
    // window.addEventListener('click', handleScroll);
    return () => {
      window.removeEventListener('click', handleScrollWithThrottle);
      // window.removeEventListener('click', handleScroll);
    }
  });
  
  /**
   * @description use this for setup github items
   */
  useEffect(() => {
    // window.addEventListener('click', throttle(handleScroll, 1000));
    ghme.info((err, body, headers) => {
      if (err) {
        return;
      }
      console.log(body);
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
    <div className="Kenny-Nguyen">
      {
        transitions.map(({ item, transitionProps }) => {
          console.log(item);
          const { component } = pages[item];
          return <animated.div style={{ ...transitionProps }}>{component}</animated.div>;
        })
      }
      <div className="controls_container_item left-control-item"><button onClick={() => setPage(2)}>Projects</button></div>
      <div className="controls_container_item right-control-item"><button onClick={() => setPage(3)}>Experience</button></div>
      <div className="controls_container">
      </div>
    </div>
  );
}

export default AnimateApp;

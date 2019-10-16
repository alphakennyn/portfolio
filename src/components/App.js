import React, { useState, useRef, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import throttle from 'lodash.throttle';

// import logo from './logo.svg';

// components
import IntroPage from './page1';
import ExperiencePage from './page2';

import './App.scss';

function App() {
  return (
    <div className="Kenny-Nguyen">
      <IntroPage />
    </div>
  );
}

const pages = [
  {
    page: 'intro',
    component: <IntroPage />,
  },
  {
    page: 'detail',
    component: <ExperiencePage />,
  }
]

const AnimateApp = (props) => {
  const [pageIndex, setPage] = useState(0);
  const [lock, setLock] = useState(true);
  const transitions = useTransition(pageIndex, p => p, {
    from: { opacity: 0, transform: 'rotateY(100deg)', transformOrigin: 'left' },
    enter: { opacity: 1, transform: 'rotateY(0)', transformOrigin: 'left', height: '100%' },
    leave: { opacity: 0, transform: 'rotateY(-100deg)', transformOrigin: 'right', position: 'absolute', visibility: 'hidden' },
  });

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 1000));
    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 1000));
    }
  });

  const handleScroll = () => {
    console.log('scroll!!')
    // e.preventDefault();

    // const element = e.target

    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   // do something at end of scroll
    //   console.log('scrolling')
    // }
    // setLock(false);
    const i = pageIndex === 0 ? 1 : 0;
    setPage(i);
    // setTimeout(() => {
    //   setLock(true);
    // }, 500)
  }

  return (
    // <div className="Kenny-Nguyen" onWheel={(e) => throttle(handleScroll(e), 1000, { trailing: true, leading: true })}>
    <div className="Kenny-Nguyen">
      {
        transitions.map(({ item, props }) => {
          const { component } = pages[item];
          return <animated.div style={{ ...props }}>{component}</animated.div>;
        })
      }
    </div>
  );
}
export default AnimateApp;

import React, { useState, useRef, useCallback } from 'react';
import { useTransition, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

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
  const transitions = useTransition(pageIndex, p => p, {
    from: { opacity: 0, transform: 'rotateY(100deg)', transformOrigin: 'left' },
    enter: { opacity: 1, transform: 'rotateY(0)', transformOrigin: 'left', height: '100%' },
    leave: { opacity: 0, transform: 'rotateY(-100deg)', transformOrigin: 'right', position: 'absolute', visibility: 'hidden' },
  });

  return (
    <div className="Kenny-Nguyen" onScroll={() => setPage(1)}>
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

import React from 'react';

import './welcome.css';

const Welcome = (): JSX.Element => {

  return (
    <div className='parallax'>
      <div className='parallax-layer parallax-background'></div>
      <div className="parallax-layer parallax-title">
        <pre>Hello  space</pre>
      </div>
      <div className='parallax-layer parallax-astronaut'></div>
    </div>
  );
};

export default Welcome;

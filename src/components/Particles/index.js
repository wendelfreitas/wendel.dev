import React, { memo } from 'react';
import Particles from 'react-particles-js';

const ParticlesBg = memo(() => {
  return (
    <Particles
      height={'100vh'}
      width={'100vw'}
      params={{
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            random: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  );
});

export default ParticlesBg;

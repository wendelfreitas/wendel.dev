import React, { memo } from 'react';
import Particles from 'react-particles-js';

function handleQuantityOfParticles() {
  const windowGlobal = typeof window !== 'undefined' && window;

  if (windowGlobal.innerWidth < 500) {
    return 30;
  }

  return 100;
}

const ParticlesBg = memo(() => (
  <Particles
    height="100vh"
    width="100vw"
    params={{
      particles: {
        number: {
          value: handleQuantityOfParticles()
        },
        size: {
          value: 3,
          random: true
        },
        move: {
          random: true,
          speed: 2
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
            mode: 'repulse'
          }
        }
      }
    }}
  />
));

export default ParticlesBg;

// lib/motion.js

const EASE = [0.22, 1, 0.36, 1]; // smooth, premium

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 100, // MORE travel so you can see it
  },
  visible: {
    opacity: 1,
    y: [100, -8, 0], // subtle settle, no snap
    transition: {
      type: 'tween',
      duration: 0.5, // slightly longer = readable
      ease: EASE,
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: [-100, 8, 0],
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: EASE,
    },
  },
};

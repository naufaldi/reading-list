import type { Variants } from 'framer-motion';



export const FadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8, // Duration of the animation
      ease: 'easeOut', // Type of easing for the animation
      when: 'beforeChildren', // animate parent first, then children
      staggerChildren: 0.3, // if there are children, stagger their animation
    },
  },
};

export const FadeInTop: Variants = {
 hidden: {
   y: 50, // start 50px below the final position
   opacity: 0,
   transition: {
     duration: 0.5, // smoother transition duration
     ease: [0.16, 1, 0.3, 1], // custom cubic-bezier ease for a smooth effect
   },
 },
 visible: {
   y: 0,
   opacity: 1,
   transition: {
     duration: 0.8, // slightly longer duration for a smoother effect
     ease: [0.16, 1, 0.3, 1], // keeping the ease consistent for both states
     when: 'beforeChildren', // animate parent first, then children
     staggerChildren: 0.5, // if there are children, stagger their animation
   },
 },
};

export const FadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50, // start from the left
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', // Use a spring physics model for the transition
      stiffness: 100, // How stiff the spring is, higher numbers will result in bouncier animations
      damping: 10, // Resistance to motion, lower numbers may extend the bounce effect
      mass: 0.75, // Mass of the moving object, affects the spring motion
      when: 'beforeChildren', // Start this animation before the children's animations
      staggerChildren: 0.1, // Stagger the animations of children by 0.1 seconds
    },
  },
};

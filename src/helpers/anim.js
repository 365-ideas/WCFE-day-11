import { filter } from "framer-motion/client";
import { ease } from "./ease";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const TitleTransition = {
  title: {
    initial: {
      opacity: 0,
      y: "20%",
      filter: "blur(1vw)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0vw)",
      transition: {
        duration: 1,
        ease: ease.outExpo,
      },
    },
    exit: {
      opacity: 0,
      y: "-20%",
      filter: "blur(1vw)",
      transition: {
        duration: 1,
        ease: ease.outExpo,
      },
      transitionEnd: {
        y: "20%",
      },
    },
  },
  text: {
    initial: {
      opacity: 0,
      filter: "blur(1vw)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0vw)",
      transition: {
        duration: 1,
        ease: ease.outExpo,
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(1vw)",
      transition: {
        duration: 1,
        ease: ease.outExpo,
      },
    },
  },
};

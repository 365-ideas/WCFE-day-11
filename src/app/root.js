"use client";

import { AnimatePresence } from "framer-motion";

export const Root = ({ children }) => {

  return (
    <>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </>
  );
};

"use client";
import React, { useState } from "react";
import { Logo } from "@/components/Logo/Logo";
import Link from "next/link";
import Image from "next/image";
import "./HomePage.scss";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { anim, TitleTransition } from "@/helpers/anim";

const list = [
  {
    image: "/images/list/image-1.jpg",
    title: "Empire City",
    descriptionText: {
      title: "Francis Scott Fitzgerald described Manhattan this way:",
      text: "The city seen from the Queensboro Bridge is always the city seen for the first time, in its first wild promise of all the mystery and beauty in the world",
    },
    listLink: {
      title: "Manhattan",
      text: "I look down on the city from above. I am Manhattan.",
    },
  },
  {
    image: "/images/list/image-2.jpg",
    title: "Breuckelen",
    descriptionText: {
      title: "Neil Diamond",
      text: "Brooklyn is not the easiest place to grow up in, although I wouldn’t change that experience for anything",
    },
    listLink: {
      title: "Brooklyn",
      text: "The bridge is a symbol of our past, our present, and our future.",
    },
  },
  {
    image: "/images/list/image-3.jpg",
    title: "Jazzland",
    descriptionText: {
      title: "James Gray",
      text: "I grew up in a semi-attached row house in Queens in New York. And my family and my grandparents and my father's from Brooklyn, and so you're essentially an outer boroughs kid, you're growing up.",
    },
    listLink: {
      title: "Queens",
      text: "Peace Through Understanding",
    },
  },
  {
    image: "/images/list/image-4.jpg",
    title: "Boogie Down",
    descriptionText: {
      title: "Wesley Snipes.",
      text: "I grew up in the Bronx. The Bronx teaches you to survive. It’s like, ‘Bring it on!",
    },
    listLink: {
      title: "The Bronx",
      text: "Boogie Down Bronx",
    },
  },
  {
    image: "/images/list/image-5.jpg",
    title: "The Rock",
    descriptionText: {
      title: "Unknown",
      text: "Staten Island is New York’s best kept secret, a place where the city’s energy meets the calm of the harbor.",
    },
    listLink: {
      title: "Staten Island",
      text: "Straight from the slums of Shaolin",
    },
  },
];

const initialText = {
  title: "E.B. White — Here is New York:",
  text: "There is no more exhilarating moment in life than when you are made a full member of a city you love. And New York is such a city — it can be as confining and dangerous as a prison, but at the same time it can be the most stimulating and liberating place on earth",
};

export default function HomePage() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="home">
      <div className="header">
        <button onClick={() => setActiveItem(null)} className="link">Yellow Cabs</button>

        <p>New York, United States</p>

        <div className="header-right">
          <div className="header__links">
            <Link href="#" className="link">
              Services
            </Link>
            <Link href="#" className="link">
              About us
            </Link>
            <Link href="#" className="link">
              Map
            </Link>
          </div>

          <Logo className="header__logo" />
        </div>
      </div>

      <div className="title-wrapper">
        <AnimatePresence mode="sync" initial={false}>
          <motion.span
            className="super-text"
            key={`${activeItem !== null ? list[activeItem]?.title : "default"}`}
            {...anim(TitleTransition.title)}
          >
            {activeItem !== null ? list[activeItem]?.title : "Yellow Cabs"}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="list">
        <div className="list-images">
          <div
            className={clsx("image", {
              "image--active": activeItem === null,
            })}
          >
            <Image src="/images/list/default.jpg" fill alt="" />
          </div>
          {list.map((item, index) => (
            <div
              className={clsx("image", {
                "image--active": index === activeItem,
              })}
              key={`list-image-${index}`}
            >
              <Image src={item.image} fill alt="" />
            </div>
          ))}
        </div>
        <div className="links">
          {list.map((item, index) => (
            <button
              key={index}
              className={clsx("links__item", {
                "links__item--active": index === activeItem,
              })}
              onClick={() => handleItemClick(index)}
            >
              <p className="list-link__text small-text regular">
                {item.listLink.text}
              </p>
              <div className="right">
                <h1 className="title">{item.listLink.title}</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M5 5H19M19 5V19M19 5L5 19"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="bg"></div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="sync" initial={false}>
          <motion.div className="left-text" {...anim(TitleTransition.text)}
          key={`${activeItem !== null ? list[activeItem]?.descriptionText.title : "default"}`}
          >
            <motion.p>
              {list[activeItem]?.descriptionText.title || initialText.title}
            </motion.p>
            <motion.p className="small-text regular">
              {list[activeItem]?.descriptionText.text || initialText.text}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

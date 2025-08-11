import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    tags?: string[];
    action?: { label: string; url: string };
    image?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) return index;
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className="relative flex h-screen justify-center space-x-10 overflow-y-auto p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full max-w-2xl">
        {content.map((item, index) => (
          <div key={item.title + index} className="my-40">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-4xl font-bold text-white"
            >
              {item.title}
            </motion.h2>
            {item.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-sm bg-gray-700 text-white rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="mt-6 text-lg text-gray-300"
            >
              {item.description}
            </motion.p>
            {item.action && (
              <a
                href={item.action.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {item.action.label}
              </a>
            )}
          </div>
        ))}
        <div className="h-40" />
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={`sticky top-20 hidden h-96 w-[30rem] overflow-hidden rounded-lg lg:block ${
          contentClassName || ""
        }`}
      >
        {content[activeCard].image && (
          <img
            src={content[activeCard].image}
            alt={content[activeCard].title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );
};
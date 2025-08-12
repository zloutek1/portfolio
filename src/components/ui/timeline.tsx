"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Single shared vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-38 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>

        {data.map((item, index) => (
          <div key={index} className="grid grid-cols-[auto_20px_1fr] gap-4 pt-10">
            {/* Date (title) first */}
            <div className="self-start min-w-32 pr-2">
              <h3 className="text-sm md:text-lg font-bold text-blue-300">{item.title}</h3>
            </div>

            {/* Node only, no per-item line */}
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-8 w-8 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-neutral-800 border border-neutral-700" />
              </div>
            </div>

            {/* Content last */}
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

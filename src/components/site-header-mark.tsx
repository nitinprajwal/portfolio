"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChanhDaiMark } from "./chanhdai-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <ChanhDaiMark />;
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <style>
        {`.brace { font-family: 'Cascadia Code', 'Cascadia Mono', 'Segoe UI Mono', Consolas, 'Liberation Mono', monospace; font-weight: 600; }`}
      </style>
      <g>
        <g transform="translate(612.588 617.817) scale(1.00691 1.01356) translate(-612.588 -617.817) translate(33.4068 27.8329) matrix(1.28986 0 0 1.29653 -129.61 -111.287)">
          <text
            className="brace"
            dominantBaseline="middle"
            fontSize="390"
            textAnchor="end"
            transform="matrix(-1 0.000960336 -0.000960336 -1 630.303 629.027)"
            x="310"
            y="350"
            fill="currentColor"
          >
            {"{"}
          </text>
          <text
            className="brace"
            dominantBaseline="middle"
            fontSize="390"
            transform="matrix(-1 0.000960336 -0.000960336 -1 630.303 629.027)"
            x="300"
            y="350"
            fill="currentColor"
          >
            {"}"}
          </text>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="43"
            x1="326.86"
            x2="326.47"
            y1="529.39"
            y2="97.05"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="43"
            x1="329.93"
            x2="539.24"
            y1="531.22"
            y2="530.02"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="43"
            x1="542.63"
            x2="543.72"
            y1="529.89"
            y2="312.85"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="43"
            x1="541.11"
            x2="474.44"
            y1="312.61"
            y2="313.62"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="43"
            x1="325.89"
            x2="108.58"
            y1="96.8"
            y2="97.82"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="43"
            x1="106.99"
            x2="105.73"
            y1="100.03"
            y2="314.56"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="43"
            x1="108.33"
            x2="175.62"
            y1="314.81"
            y2="313.85"
          />
        </g>
      </g>
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

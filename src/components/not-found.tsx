import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 640 640"
        id="js-cover-mark"
        className="h-1/4 w-auto"
      >
        <style>{`.brace { font-family: 'Cascadia Code', 'Cascadia Mono', 'Segoe UI Mono', Consolas, 'Liberation Mono', monospace; font-weight: 600; }`}</style>
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
              {`{`}
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
              {`}`}
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
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="43"
              x1="329.93"
              x2="539.24"
              y1="531.22"
              y2="530.02"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="43"
              x1="542.63"
              x2="543.72"
              y1="529.89"
              y2="312.85"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="43"
              x1="541.11"
              x2="474.44"
              y1="312.61"
              y2="313.62"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="43"
              x1="325.89"
              x2="108.58"
              y1="96.8"
              y2="97.82"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="43"
              x1="106.99"
              x2="105.73"
              y1="100.03"
              y2="314.56"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="43"
              x1="108.33"
              x2="175.62"
              y1="314.81"
              y2="313.85"
            ></line>
          </g>
        </g>
      </svg>

      <h1 className="mt-8 mb-6 text-8xl font-medium">404</h1>

      <Button variant="link" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}

import React from "react";

export const Ollama = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Head */}
    <path d="M6 18V10a6 6 0 0112 0v8" />
    
    {/* Ears */}
    <path d="M9 4l-2 4" />
    <path d="M15 4l2 4" />

    {/* Face */}
    <circle cx="10" cy="13" r="1" fill="currentColor" />
    <circle cx="14" cy="13" r="1" fill="currentColor" />
    <path d="M10 16c1 .8 3 .8 4 0" />
  </svg>
);
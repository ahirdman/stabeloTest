import * as React from 'react';

interface ISVGProps {
  fill?: string;
  stroke?: string;
  className?: string;
}
export const Gear = ({ className }: ISVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    className={className}
  >
    <g>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.962 8.138c.317.291.617.591.9.9l3.413.487c.556.966.985 2 1.275 3.075l-2.075 2.763s.037.85 0 1.274L28.55 19.4a12.777 12.777 0 0 1-1.275 3.075l-3.412.487s-.588.613-.9.9l-.488 3.413A12.9 12.9 0 0 1 19.4 28.55l-2.762-2.075a7.24 7.24 0 0 1-1.276 0L12.6 28.55a12.776 12.776 0 0 1-3.075-1.275l-.487-3.412a22.965 22.965 0 0 1-.9-.9l-3.413-.488c-.556-.966-.985-2-1.275-3.075l2.075-2.762s-.037-.85 0-1.276L3.45 12.6c.29-1.076.718-2.11 1.275-3.075l3.413-.487c.291-.309.591-.609.9-.9l.487-3.413c.966-.556 2-.985 3.075-1.275l2.763 2.075c.424-.038.85-.038 1.274 0L19.4 3.45c1.076.29 2.11.718 3.075 1.275l.487 3.413Z"
      />
    </g>
  </svg>
);

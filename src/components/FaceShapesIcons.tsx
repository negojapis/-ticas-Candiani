import React from 'react';

// Common Elements
const Neck = () => (
  <path d="M 38 85 L 35 100 M 62 85 L 65 100" stroke="currentColor" strokeWidth="3" fill="none" />
);

const MaleHair = () => (
  <g stroke="currentColor" strokeWidth="2.5" fill="none">
    {/* Hair outline */}
    <path d="M 22 45 C 20 15, 80 15, 78 45" />
    {/* Hair texture lines */}
    <path d="M 28 35 C 35 20, 65 20, 72 35" />
    <path d="M 35 28 C 40 15, 60 15, 65 28" />
    <path d="M 45 23 C 48 15, 52 15, 55 23" />
  </g>
);

const FemaleHair = () => (
  <g stroke="currentColor" strokeWidth="2.5" fill="none">
    {/* Pulled back hair outline */}
    <path d="M 24 45 C 24 10, 76 10, 76 45" />
    <path d="M 30 35 C 40 20, 60 20, 70 35" />
    <path d="M 35 30 C 45 15, 55 15, 65 30" />
    {/* Top bun */}
    <path d="M 40 13 C 35 5, 65 5, 60 13" />
  </g>
);

const BaseSvg = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800" fill="#fff" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

// MALE SHAPES
// Oval: Balanced, gently rounded chin
export const MaleOval = () => (
  <BaseSvg>
    <Neck />
    <path d="M 22 45 C 22 75, 38 90, 50 90 C 62 90, 78 75, 78 45 Z" stroke="currentColor" strokeWidth="3" />
    <MaleHair />
  </BaseSvg>
);

// Round: Wider cheeks, full curved bottom
export const MaleRound = () => (
  <BaseSvg>
    <Neck />
    <path d="M 20 45 C 20 85, 32 92, 50 92 C 68 92, 80 85, 80 45 Z" stroke="currentColor" strokeWidth="3" />
    <MaleHair />
  </BaseSvg>
);

// Square: Straight strong jaw, flat chin
export const MaleSquare = () => (
  <BaseSvg>
    <Neck />
    <path d="M 21 45 L 21 68 C 21 85, 35 88, 50 88 C 65 88, 79 85, 79 68 L 79 45 Z" stroke="currentColor" strokeWidth="3" />
    <MaleHair />
  </BaseSvg>
);

// Rectangle (Longo): Narrower than square, long straight sides
export const MaleRectangle = () => (
  <BaseSvg>
    <Neck />
    <path d="M 26 45 L 26 72 C 26 88, 38 90, 50 90 C 62 90, 74 88, 74 72 L 74 45 Z" stroke="currentColor" strokeWidth="3" />
    <MaleHair />
  </BaseSvg>
);

// Heart: Wide temples, tapers sharply to pointed chin
export const MaleHeart = () => (
  <BaseSvg>
    <Neck />
    <path d="M 20 45 C 20 60, 35 85, 50 92 C 65 85, 80 60, 80 45 Z" stroke="currentColor" strokeWidth="3" />
    <MaleHair />
  </BaseSvg>
);

// Diamond: Narrow forehead (angled out to cheeks), wide cheeks, pointed chin
export const MaleDiamond = () => (
  <BaseSvg>
    <Neck />
    <path d="M 28 45 L 20 55 C 20 65, 38 88, 50 92 C 62 88, 80 65, 80 55 L 72 45 Z" stroke="currentColor" strokeWidth="3" />
    <MaleHair />
  </BaseSvg>
);

// FEMALE SHAPES
// Oval
export const FemaleOval = () => (
  <BaseSvg>
    <Neck />
    <path d="M 24 45 C 24 75, 38 90, 50 90 C 62 90, 76 75, 76 45 Z" stroke="currentColor" strokeWidth="3" />
    <FemaleHair />
  </BaseSvg>
);

// Round
export const FemaleRound = () => (
  <BaseSvg>
    <Neck />
    <path d="M 22 45 C 22 85, 32 92, 50 92 C 68 92, 78 85, 78 45 Z" stroke="currentColor" strokeWidth="3" />
    <FemaleHair />
  </BaseSvg>
);

// Square
export const FemaleSquare = () => (
  <BaseSvg>
    <Neck />
    <path d="M 23 45 L 23 68 C 23 85, 35 88, 50 88 C 65 88, 77 85, 77 68 L 77 45 Z" stroke="currentColor" strokeWidth="3" />
    <FemaleHair />
  </BaseSvg>
);

// Rectangle (Longo)
export const FemaleRectangle = () => (
  <BaseSvg>
    <Neck />
    <path d="M 27 45 L 27 72 C 27 88, 38 90, 50 90 C 62 90, 73 88, 73 72 L 73 45 Z" stroke="currentColor" strokeWidth="3" />
    <FemaleHair />
  </BaseSvg>
);

// Heart
export const FemaleHeart = () => (
  <BaseSvg>
    <Neck />
    <path d="M 22 45 C 22 60, 35 85, 50 92 C 65 85, 78 60, 78 45 Z" stroke="currentColor" strokeWidth="3" />
    <FemaleHair />
  </BaseSvg>
);

// Diamond
export const FemaleDiamond = () => (
  <BaseSvg>
    <Neck />
    <path d="M 30 45 L 22 55 C 22 65, 38 88, 50 92 C 62 88, 78 65, 78 55 L 70 45 Z" stroke="currentColor" strokeWidth="3" />
    <FemaleHair />
  </BaseSvg>
);

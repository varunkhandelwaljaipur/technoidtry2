"use client";

import React from 'react';

// This component is now purely for client-side rendering and styling.
interface ClientImageProps {
    src: string;
    alt: string;
    className: string;
}

export default function ClientImage({ src, alt, className }: ClientImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}

    />
  );
}

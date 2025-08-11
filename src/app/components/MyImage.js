"use client";

import Image from "next/image";

export default function MyImage({ src, alt, width, height, className }) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        priority
      />
    </div>
  );
}

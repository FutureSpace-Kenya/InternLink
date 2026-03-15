import Image from "next/image";

/**
 * Illustration utility - renders a Sandy SVG from /public/svgs/illustrations/
 *
 * Usage:
 *   <Illustration name="20770326_Sandy_Edu-05_Single-08" className="w-full h-auto" />
 *   <Illustration name="20770326_Sandy_Edu-05_Single-08.svg" className="w-64" />
 *
 * Pass just the filename (with or without .svg extension).
 * Add more illustrations to /public/svgs/illustrations/ and reference by filename.
 */

interface IllustrationProps {
  name: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function Illustration({
  name,
  className,
  alt = "",
  width = 600,
  height = 500,
}: IllustrationProps) {
  const filename = name.endsWith(".svg") ? name : `${name}.svg`;
  const src = `/svgs/illustrations/${filename}`;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized // SVGs don't need Next.js image optimisation
    />
  );
}

import Image from "next/image";

// Location images inside travel guides. Both render inside .prose-travel,
// use fixed-height containers (no layout shift) and lazy-load by default.

export function GuideFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="guide-figure my-6">
      <div className="relative w-full h-72 overflow-hidden rounded-xl shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function GuidePhotoRow({
  images,
}: {
  images: { src: string; alt: string; caption: string }[];
}) {
  return (
    <div
      className={`guide-photo-row my-6 grid gap-3 ${
        images.length >= 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
      }`}
    >
      {images.map((img) => (
        <figure key={img.src} className="guide-figure m-0">
          <div className="relative h-36 w-full overflow-hidden rounded-lg sm:h-40">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 240px, 50vw"
              className="object-cover"
            />
          </div>
          <figcaption>{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

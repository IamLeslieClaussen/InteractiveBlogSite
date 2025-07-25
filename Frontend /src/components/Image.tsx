interface ImageProps {
  src: string;
  className?: string;
  w?: number;
  h?: number;
  alt: string;
}

function Image({ src, className, w, h, alt }: ImageProps) {
  const imageKitUrl = import.meta.env.VITE_IK_URL_ENDPOINT || '';
  const imageSrc = imageKitUrl ? `${imageKitUrl}/${src}` : `/${src}`;
  
  return (
    <img
      src={imageSrc}
      width={w}
      height={h}
      className={className}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        // Fallback to local image if ImageKit fails
        e.currentTarget.src = `/${src}`;
      }}
    />
  );
}

export default Image;

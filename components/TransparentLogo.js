import { useEffect, useState } from 'react';

function isNearWhite(r, g, b, threshold) {
  return r >= threshold && g >= threshold && b >= threshold;
}

export default function TransparentLogo({
  src,
  alt,
  className = '',
  threshold = 245,
}) {
  const [processedSrc, setProcessedSrc] = useState('');

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (isNearWhite(r, g, b, threshold)) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL('image/png'));
    };

    return () => {
      cancelled = true;
    };
  }, [src, threshold]);

  return <img src={processedSrc || src} alt={alt} className={className} />;
}

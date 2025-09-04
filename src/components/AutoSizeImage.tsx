'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import NextImage from 'next/image';

interface AutoSizeImageProps {
  imageUrl?: string;
  sizeBasedOn?: 'Height' | 'Width';
  enableLazyLoading?: boolean;
  style?: {
    border?: {
      borderWidth: number;
      borderStyle: string;
      borderColor: string;
    };
    borderRadius?: number;
    boxShadow?: string;
  };
  link?: string;
  newTab?: boolean;
}

export default function AutoSizeImage({
  imageUrl,
  sizeBasedOn = 'Height',
  enableLazyLoading = true,
  style = {},
  link,
  newTab = true
}: AutoSizeImageProps) {
  const [aspectRatio, setAspectRatio] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(100);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!imageUrl) return;
    
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    };
  }, [imageUrl]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const newSize = sizeBasedOn === 'Height' 
        ? entry.contentRect.height 
        : entry.contentRect.width;
      
      if (newSize !== containerSize) {
        setContainerSize(newSize);
      }
    });
    
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [sizeBasedOn, containerSize]);

  useEffect(() => {
    if (!imageUrl) return;
    
    const img = new Image();
    img.src = imageUrl;
    
    if (img.complete) {
      handleLoad();
    }
  }, [imageUrl, handleLoad]);

  const calculatedSize = useMemo(() => {
    if (!containerSize) return '100%';
    return sizeBasedOn === 'Height' 
      ? containerSize * aspectRatio 
      : containerSize / aspectRatio;
  }, [containerSize, aspectRatio, sizeBasedOn]);

  const imageStyle = {
    opacity: loaded ? 1 : 0,
    transition: enableLazyLoading ? 'opacity 0.5s ease-in' : 'none',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as const
  };

  const getAbsoluteUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    if (url.startsWith('/')) {
      return url;
    }
    return `https://${url}`;
  };

  const isExternalLink = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://') || url.includes('://');
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: imageUrl ? 'transparent' : 'rgba(146, 97, 241, 0.10)',
        minWidth: imageUrl && sizeBasedOn === 'Height' ? '50px' : 'auto',
        minHeight: imageUrl && sizeBasedOn === 'Width' ? '50px' : 'auto',
        borderRadius: imageUrl && loaded ? style.borderRadius : 0,
        boxShadow: imageUrl && loaded ? style.boxShadow : 'none',
        ...(imageUrl 
          ? sizeBasedOn === 'Height'
            ? { width: calculatedSize, height: '100%' }
            : { width: '100%', height: calculatedSize }
          : { 
              width: '100%', 
              height: '100%', 
              minWidth: 260, 
              minHeight: 150, 
              padding: '50px 80px', 
              boxSizing: 'border-box' as const 
            }
        )
      }}
    >
      {imageUrl ? (
        <>
          {link ? (
            <a
              href={getAbsoluteUrl(link)}
              target={newTab ? '_blank' : '_self'}
              rel={isExternalLink(getAbsoluteUrl(link)) && newTab ? 'noopener noreferrer' : ''}
            >
              <NextImage
                src={imageUrl}
                loading={enableLazyLoading ? 'lazy' : 'eager'}
                style={{
                  ...imageStyle,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' as const
                }}
                onLoad={handleLoad}
                alt="Auto size image"
                fill
              />
            </a>
          ) : (
            <NextImage
              src={imageUrl}
              loading={enableLazyLoading ? 'lazy' : 'eager'}
              style={{
                ...imageStyle,
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const
              }}
              onLoad={handleLoad}
              alt="Auto size image"
              fill
            />
          )}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              ...style.border,
              borderRadius: imageUrl && loaded ? style.borderRadius : 0,
              pointerEvents: 'none',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in'
            }}
          />
        </>
      ) : (
        <>
          <div style={{ 
            textAlign: 'center', 
            color: 'rgba(255, 255, 255, 0.9)', 
            opacity: 1,
            padding: '100px 80px',
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ 
              fontSize: 80, 
              margin: '30px 0',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
            }}>
              💼
            </div>
            <h2 style={{ 
              fontSize: 24, 
              margin: '20px 0',
              fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Profilo LinkedIn
            </h2>
            <p style={{ 
              fontSize: 16, 
              margin: '15px 0',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.4,
              maxWidth: '300px'
            }}>
              Esempio di profilo professionale ottimizzato
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '16px',
              pointerEvents: 'none',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
            }}
          />
        </>
      )}
    </div>
  );
}

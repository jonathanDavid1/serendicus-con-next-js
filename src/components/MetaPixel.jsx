import React, { useEffect } from 'react';
import Pixel from 'react-facebook-pixel'; // Import from installed library
import dynamic from 'next/dynamic';

const DynamicPixel = dynamic(() => import('react-facebook-pixel'), {
    ssr: false,
  });

const MetaPixel = ({ pixelId }) => {
  useEffect(() => {
    Pixel.init(pixelId); // Initialize Pixel with your ID
    Pixel.pageView(); // Track initial page view
  }, [pixelId]);

  // Track additional events here (optional)
  // Pixel.track('AddToCart', { value: productPrice });

  return null; // No visible output
};

export default MetaPixel;
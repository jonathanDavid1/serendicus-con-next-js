import React, { useEffect } from 'react';
import Pixel from 'react-facebook-pixel'; // Import from installed library

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
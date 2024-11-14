// Import statements
import React from 'react';
import { Image } from 'react-native';
import styles from '../Styles/ImageViewerStyles.js';

// ImageViewer accepts 1 property 
// placeholderImageSource: the source of the image to be displayed
export default function ImageViewer({ placeholderImageSource }) {
  
  // Returns an image component with the specified image and applies styling to it  
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}



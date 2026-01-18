import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { getCentroid, latLngToVector3 } from '../utils/coordinates';

const CameraController = ({ target }) => {
  const { camera } = useThree();
  
  useEffect(() => {
    if (target) {
      const centroid = getCentroid(target.geometry.coordinates);
      const targetPosition = latLngToVector3(centroid.lat, centroid.lng, 4.5);
      
      const startPos = camera.position.clone();
      const endPos = targetPosition;
      let progress = 0;
      
      const animate = () => {
        progress += 0.02;
        if (progress < 1) {
          camera.position.lerpVectors(startPos, endPos, progress);
          camera.lookAt(0, 0, 0);
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  }, [target, camera]);
  
  return null;
};

export default CameraController;
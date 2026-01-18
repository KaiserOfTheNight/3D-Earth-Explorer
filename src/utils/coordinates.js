import * as THREE from 'three';

// Convert latitude/longitude to 3D coordinates on a sphere
export const latLngToVector3 = (lat, lng, radius = 2) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  
  return new THREE.Vector3(x, y, z);
};

// Get centroid of a polygon
export const getCentroid = (coordinates) => {
  let totalLat = 0, totalLng = 0, count = 0;
  
  const processCoords = (coords) => {
    coords.forEach(point => {
      if (Array.isArray(point[0])) {
        processCoords(point);
      } else {
        totalLng += point[0];
        totalLat += point[1];
        count++;
      }
    });
  };
  
  processCoords(coordinates);
  return { lat: totalLat / count, lng: totalLng / count };
};
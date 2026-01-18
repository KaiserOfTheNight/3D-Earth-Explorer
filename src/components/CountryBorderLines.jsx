import React from 'react';
import { latLngToVector3 } from '../utils/coordinates';

const CountryBorderLines = ({ country, isSelected }) => {
  const lines = [];
  const geometry = country.geometry;
  
  const processCoordinates = (coords, depth = 0) => {
    if (depth > 10) return;
    
    if (coords.length > 0 && Array.isArray(coords[0])) {
      if (typeof coords[0][0] === 'number') {
        const points = coords.map(coord => {
          const [lng, lat] = coord;
          return latLngToVector3(lat, lng, 2.01);
        });
        
        if (points.length > 1) {
          lines.push(points);
        }
      } else {
        coords.forEach(c => processCoordinates(c, depth + 1));
      }
    }
  };
  
  if (geometry.type === 'Polygon') {
    processCoordinates(geometry.coordinates);
  } else if (geometry.type === 'MultiPolygon') {
    geometry.coordinates.forEach(polygon => {
      processCoordinates(polygon);
    });
  }
  
  return (
    <group>
      {lines.map((points, lineIndex) => (
        <line key={lineIndex}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={isSelected ? '#00ff88' : '#ffffff'}
            opacity={isSelected ? 1 : 0.4}
            transparent
            linewidth={isSelected ? 2 : 1}
          />
        </line>
      ))}
    </group>
  );
};

export default CountryBorderLines;

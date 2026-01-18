import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { latLngToVector3 } from '../utils/coordinates';

const CountryClickArea = ({ country, onCountryClick }) => {
  const meshRefs = useRef([]);
  const [hovered, setHovered] = useState(false);
  
  const createCountryMeshes = () => {
    const meshes = [];
    const geometry = country.geometry;
    
    const processPolygon = (coordinates) => {
      if (coordinates.length === 0) return;
      
      const outerRing = coordinates[0];
      if (!outerRing || outerRing.length < 3) return;
      
      const vertices = [];
      const indices = [];
      
      outerRing.forEach(coord => {
        if (coord && coord.length >= 2) {
          const [lng, lat] = coord;
          const point = latLngToVector3(lat, lng, 2.015);
          vertices.push(point.x, point.y, point.z);
        }
      });
      
      for (let i = 1; i < outerRing.length - 1; i++) {
        indices.push(0, i, i + 1);
      }
      
      if (vertices.length > 0 && indices.length > 0) {
        meshes.push({ vertices, indices });
      }
    };
    
    if (geometry.type === 'Polygon') {
      processPolygon(geometry.coordinates);
    } else if (geometry.type === 'MultiPolygon') {
      geometry.coordinates.forEach(polygon => {
        processPolygon(polygon);
      });
    }
    
    return meshes;
  };
  
  const meshes = createCountryMeshes();
  
  return (
    <group>
      {meshes.map((mesh, index) => (
        <mesh
          key={index}
          ref={el => meshRefs.current[index] = el}
          onClick={(e) => {
            e.stopPropagation();
            onCountryClick(country);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'default';
          }}
        >
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={mesh.vertices.length / 3}
              array={new Float32Array(mesh.vertices)}
              itemSize={3}
            />
            <bufferAttribute
              attach="index"
              count={mesh.indices.length}
              array={new Uint16Array(mesh.indices)}
              itemSize={1}
            />
          </bufferGeometry>
          <meshBasicMaterial
            transparent
            opacity={0}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

export default CountryClickArea;
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Earth from './components/Earth';
import Countries from './components/Countries';
import CameraController from './components/CameraController';
import LoadingScreen from './components/LoadingScreen';
import CountryInfoPanel from './components/CountryInfoPanel';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cameraTarget, setCameraTarget] = useState(null);
  
  // Load GeoJSON data from public source
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
        );
        const data = await response.json();
        
        const filteredCountries = data.features.filter(feature => {
          const name = feature.properties.ADMIN || feature.properties.name;
          return name !== 'Antarctica' && feature.geometry;
        });
        
        setCountries(filteredCountries);
        setLoading(false);
      } catch (error) {
        console.error('Error loading GeoJSON:', error);
        setLoading(false);
      }
    };
    
    loadCountries();
  }, []);
  
  // Fetch country data from API
  const handleCountryClick = async (country) => {
    setSelectedCountry(country);
    setCameraTarget(country);
    
    try {
      const countryName = country.properties.ADMIN || country.properties.name;
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`
      );
      const data = await response.json();
      setCountryData(data);
    } catch (error) {
      console.error('Error fetching country data:', error);
      try {
        const altName = country.properties.name || country.properties.ADMIN;
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(altName)}`
        );
        const data = await response.json();
        setCountryData(data);
      } catch (err) {
        console.error('Alternative fetch failed:', err);
      }
    }
  };
  
  const handleClosePanel = () => {
    setCountryData(null);
    setSelectedCountry(null);
    setCameraTarget(null);
  };
  
  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      {loading && <LoadingScreen />}
      
      <CountryInfoPanel
        countryData={countryData}
        onClose={handleClosePanel}
      />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 3, 5]} intensity={1} />
          <pointLight position={[-5, -3, -5]} intensity={0.3} color="#00ff88" />
          
          <Stars
            radius={300}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          
          <Earth />
          
          {countries.length > 0 && (
            <Countries
              countries={countries}
              selectedCountry={selectedCountry}
              onCountryClick={handleCountryClick}
            />
          )}
          
          <CameraController target={cameraTarget} />
          
          <OrbitControls
            enablePan={false}
            minDistance={3}
            maxDistance={15}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;




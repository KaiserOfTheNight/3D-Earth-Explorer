import React from 'react';
import CountryBorderLines from './CountryBorderLines';
import CountryClickArea from './CountryClickArea';

const Countries = ({ countries, selectedCountry, onCountryClick }) => {
  return (
    <group>
      {countries.map((country, index) => {
        const countryName = country.properties.ADMIN || country.properties.name;
        const isSelected = selectedCountry?.properties?.ADMIN === countryName || 
                          selectedCountry?.properties?.name === countryName;
        
        return (
          <group key={index}>
            <CountryBorderLines country={country} isSelected={isSelected} />
            <CountryClickArea country={country} onCountryClick={onCountryClick} />
          </group>
        );
      })}
    </group>
  );
};

export default Countries;
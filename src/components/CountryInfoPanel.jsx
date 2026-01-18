import React from 'react';
import InfoRow from './InfoRow';

const CountryInfoPanel = ({ countryData, onClose }) => {
  if (!countryData) return null;
  
  const data = countryData[0];
  
  return (
    <div className="fixed top-6 right-6 w-80 max-h-[85vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 text-white shadow-2xl shadow-emerald-500/20 z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xl transition-all duration-300"
      >
        ×
      </button>
      
      {data.flags?.svg && (
        <img
          src={data.flags.svg}
          alt={`${data.name.common} flag`}
          className="w-full h-40 object-cover rounded-xl mb-5 shadow-lg border border-white/10"
        />
      )}
      
      <h2 className="text-3xl font-bold text-emerald-400 mb-5">
        {data.name.common}
      </h2>
      
      <div className="flex flex-col gap-4">
        <InfoRow label="Official Name" value={data.name.official} />
        <InfoRow label="Capital" value={data.capital?.[0] || 'N/A'} />
        <InfoRow label="Region" value={data.region} />
        <InfoRow label="Subregion" value={data.subregion || 'N/A'} />
        <InfoRow label="Population" value={data.population.toLocaleString()} />
        <InfoRow label="Area" value={`${data.area.toLocaleString()} km²`} />
        <InfoRow label="Languages" value={data.languages ? Object.values(data.languages).join(', ') : 'N/A'} />
        <InfoRow label="Currencies" value={data.currencies ? Object.values(data.currencies).map(c => c.name).join(', ') : 'N/A'} />
        <InfoRow label="Timezones" value={data.timezones?.join(', ') || 'N/A'} />
      </div>
    </div>
  );
};

export default CountryInfoPanel;
import React from 'react';

const InfoRow = ({ label, value }) => (
  <div>
    <div className="text-xs uppercase tracking-wider text-white/50 mb-1 font-semibold">
      {label}
    </div>
    <div className="text-base font-medium text-white">
      {value}
    </div>
  </div>
);

export default InfoRow;
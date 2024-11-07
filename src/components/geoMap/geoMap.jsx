import React, { useState } from 'react';
import MapChart from './mapChart';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import '../../styles/geoMap/styles.css';
const GeoMap = () => {
  const [content, setContent] = useState('');
  return (
    <div className="w-full mt-40">
      <h1 className="text-4xl md:text-7xl"> MAPA DEL MUNDO </h1>

      <MapChart setTooltipContent={setContent} />
      <ReactTooltip
        id="tooltip"
        style={{
          backgroundColor: '#181c1d',
          color: '#fff',
          borderRadius: '10px',
        }}
        float
        content={content}
      />
    </div>
  );
};

export default GeoMap;

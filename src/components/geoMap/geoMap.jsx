import React, { useState } from 'react';
import MapChart from './mapChart';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import '../../styles/geoMap/styles.css';
const GeoMap = () => {
  const [content, setContent] = useState('');
  console.log(content);
  return (
    <div>
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

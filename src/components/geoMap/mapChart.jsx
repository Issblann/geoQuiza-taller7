import React, { memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from 'react-simple-maps';
const MapChart = ({ setTooltipContent }) => {
  return (
    <div>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
        height={450}
      >
        <ZoomableGroup>
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#92cace" />
          <Geographies geography="../../../public/JSOMAP/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  data-tooltip-id="tooltip"
                  data-tooltip-content={geo.properties.name}
                  data-tooltip-float={true}
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  fill="#356169"
                  style={{
                    default: {
                      fill: '#92cace',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#356169',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#356169',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);

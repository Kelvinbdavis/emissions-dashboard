import dynamic from 'next/dynamic';
import { LatLngExpression, icon, Icon } from 'leaflet';
import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap, Popup, Tooltip, Marker, TileLayer } from 'react-leaflet';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';

ChartJS.register(CategoryScale);

const gasIcon: Icon = icon({
  iconUrl: '/Co2_carbon_dioxide_icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);

const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), {
  ssr: false,
});

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const MapComponent = () => {
  const [center, setCenter] = useState<LatLngExpression>([37.0902, -95.7129]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCenter([37.0902, -95.7129]);
    }
  }, []);

  const emissionsData = [
    {
      id: 1,
      name: 'Location 1',
      lat: 37.0902,
      lon: -95.7129,
      emission: { type1: 100, type2: 200 },
    },
  ];

  const getChartData = emission => {
    return {
      labels: Object.keys(emission),
      datasets: [
        {
          label: 'Emission',
          data: Object.values(emission),
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const PopupWrapper = ({ children, minWidth }) => {
    const popupRef = useRef(null);

    useEffect(() => {
      if (popupRef.current) {
        popupRef.current.options.minWidth = minWidth;
      }
    }, [minWidth]);

    return <Popup ref={popupRef}>{children}</Popup>;
  };

  return (
    <MapContainer style={{ height: '100%', width: '100%', borderRadius: 20 }}>
      <ChangeView center={center} zoom={4} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {emissionsData.map(data => (
        <Marker key={data.id} position={[data.lat, data.lon]} icon={gasIcon}>
          <div style={{ minWidth: 325 }}>
            <PopupWrapper minWidth={200}>
              {data.name}
              <Bar data={getChartData(data.emission)} />
            </PopupWrapper>
          </div>
          <Tooltip>{data.name}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngTuple } from 'leaflet';
import Diamond from 'assets/img/icon-blip.svg';

const POSITION: LatLngTuple = [59.968306, 30.317916]

const MarkerIcon = new Icon({
  iconUrl: Diamond,
  iconAnchor: [28, 70]
});

enum TileLayerProps {
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  Url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const Map = () => {
  return (
    <MapContainer
      center={POSITION}
      style={{ width: '649px' }}
      zoom={16}
    >
      <TileLayer
        attribution={TileLayerProps.Attribution}
        url={TileLayerProps.Url}
      />
      <Marker position={POSITION} icon={MarkerIcon}>
        <Popup>
          Мы здесь!
        </Popup>
      </Marker>
  </MapContainer>
  )
}

export default Map;

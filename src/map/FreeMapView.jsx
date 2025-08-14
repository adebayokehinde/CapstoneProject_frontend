import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './BookRide.module.css';

const ORS_API_KEY = 'YOUR_OPENROUTESERVICE_API_KEY'; // Replace this

function RecenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.setView(position, 13);
  }, [position]);
  return null;
}

function FreeMapView() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);

  const geocodeAddress = async (address) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );
    const data = await response.json();
    if (data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
    return null;
  };

  const getRoute = async (start, end) => {
    const response = await fetch('https://api.openrouteservice.org/v2/directions/driving-car/geojson', {
      method: 'POST',
      headers: {
        'Authorization': ORS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        coordinates: [
          [start[1], start[0]], // longitude, latitude
          [end[1], end[0]],
        ],
      }),
    });

    const data = await response.json();
    const coords = data.features[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    setRouteCoords(coords);
  };

  const handlePickupBlur = async () => {
    const coords = await geocodeAddress(pickup);
    if (coords) {
      setPickupCoords(coords);
      if (dropoffCoords) getRoute(coords, dropoffCoords);
    } else {
      alert('Pickup location not found');
    }
  };

  const handleDropoffBlur = async () => {
    const coords = await geocodeAddress(dropoff);
    if (coords) {
      setDropoffCoords(coords);
      if (pickupCoords) getRoute(pickupCoords, coords);
    } else {
      alert('Drop-off location not found');
    }
  };

  const center = pickupCoords || dropoffCoords || [6.5244, 3.3792]; // default to Lagos

  return (
    <div className={style.pageWrapper}>
      <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {pickupCoords && <Marker position={pickupCoords}><Popup>Pickup</Popup></Marker>}
        {dropoffCoords && <Marker position={dropoffCoords}><Popup>Drop-off</Popup></Marker>}

        {routeCoords.length > 0 && <Polyline positions={routeCoords} color="blue" />}

        <RecenterMap position={center} />
      </MapContainer>

      {/* Booking Form */}
      <div className={style.BookRideContainer}>
        <h1>Book a Ride</h1>
        <span>Enter your pickup and drop-off details to get a quick quote</span>

        <label>Pickup Location</label>
        <input
          type="text"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          onBlur={handlePickupBlur}
        />

        <label>Drop-off Location</label>
        <input
          type="text"
          placeholder="Enter drop-off location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          onBlur={handleDropoffBlur}
        />

        <label>Date</label>
        <input type="date" />

        <button>Book My Ride</button>
      </div>
    </div>
  );
}

export default FreeMapView;

import { GoogleMap, useLoadScript, Autocomplete, Marker } from '@react-google-maps/api';

const libraries = ["places"];

export default function Places() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "{{googleMapsApiKey}}",
    libraries: libraries
  });

  const center = { lat: 41.015137, lng: 28.979530 };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center} />
          <Autocomplete  >
            <input type="text" placeholder="Search..." className="map-autocomplete" />
          </Autocomplete>
        </GoogleMap>
      )}
    </>
  );
}
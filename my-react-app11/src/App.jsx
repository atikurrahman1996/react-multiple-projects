import "./App.css";
import GoogleMapReact from "google-map-react";
import { googleAPIKey } from "./googleAPIKey";

import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = () => (
  <div style={{ color: "red" }}>
    <FaMapMarkerAlt></FaMapMarkerAlt>
  </div>
);

function App() {
  const defaultProps = {
    center: {
      lat: 23.841,
      lng: 90.4152,
    },
    zoom: 15,
  };

  return (
    <>
      <div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
}

export default App;

// Using google map
// Using react marker icons so that, we can see location icon in the map
// To see the real views add original google map api key

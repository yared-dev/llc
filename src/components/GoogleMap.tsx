import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      id="gmap_canvas"
      src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=central%20park%20ney%20york+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      title="Google Map"
    ></iframe>
  );
};

export default GoogleMap;

// Agrega la siguiente línea para resolver el error de TypeScript
export {};

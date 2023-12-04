

const GoogleMap = ({src}:{src:string}) => {
  return (
    <iframe
      width="100%"
      height="100%"
      id="gmap_canvas"
      src= {src}
      title="Google Map"
    ></iframe>
  );
};

export default GoogleMap;

export {};

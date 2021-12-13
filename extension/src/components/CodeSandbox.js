const CodeSandbox = ({ src, title }) => {
  return (
    <iframe
      src={src}
      style={{ width: "450px", height: "150px" }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default CodeSandbox;

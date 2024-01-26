const Illustration = ({ imageSrc, imageAlt, illustrationStyle = {'height': '200px', 'width': '256px'} }) => {
  return (
    <div style={illustrationStyle} className="">
      <img
        className="
          h-full
          w-full  
          rounded-lg
        "
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
};

export default Illustration;

const Illustration = ({ imageSrc, imageAlt }) => {
  return (
    <div className=" h-301 w-80">
      <img
        className="
          h-full
          w-full  
        "
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
};

export default Illustration;

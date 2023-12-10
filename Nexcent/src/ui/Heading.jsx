const Heading = ({ heading, subHeading }) => {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justirfy-center
      gap-2
      w-full lg:w-480
      mx-auto
      text-center
    "
    >
      <h2
        className="
        font-semibold
        text-2xl
        text-center
        text-neutral-600

      "
      >
        {heading}
      </h2>
      <p
        className="
      text-neutral-500
        mb-2
      "
      >
        {subHeading}
      </p>
    </div>
  );
};

export default Heading;

import frames from "../../data/community";

const Frame = ({ icon, frame }) => {
  return (
    <>
      {/* icon section */}
      <div>
        <img src={icon.path} alt={icon.name} />
        <div></div>
      </div>

      {/* main */}
      <main>
        <h3>{frame.heading}</h3>
        <p>{frame.subHeading}</p>
      </main>
    </>
  );
};

const Community = () => {
  const communityFrames = frames.map(({ icon, frame }, index) => (
    <Frame key={index} icon={icon} frame={frame} />
  ));

  return (
    <section
      className="
      container mx-auto
      "
    >
      {/* Commuity section */}
      <div
        className="
          flex
          flex-col
          items-center
          justirfy-center
          gap-2
          w-96
          mx-auto
          mb-3
        "
      >
        <h2
          className="
            font-semibold
            text-2xl
            text-center
            text-neutral-600

          "
        >Manage your entire community in a single system</h2>
        <p className="
        text-neutral-500
        "
        >Who is Nextcent suitable for?</p>
      </div>

      {/* Frome */}
      <div
        className="
          flex 
          justify-center
          itmes-center
        "
      >{communityFrames}</div>
    </section>
  );
};

export default Community;

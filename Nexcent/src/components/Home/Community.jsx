import frames from "../../data/community";

const Frame = ({ icon, frame }) => {
  // make the word heading break :)
  let bar = frame.heading.split(" ");
  let firstPart = bar.shift();

  return (
    <div
      className="
        w-52
        py-4
      "
    >
      {/* icon section */}
      <div
        className="
          mb-3
          relative
      "
      >
        <img
          className="
           w-9
           h-9
           mx-auto
          "
          src={icon.path}
          alt={icon.name}
        />

        {/* the wired thing */}
        <div
          className="
            w-8
            h-8
            absolute
            right-1/2
            bottom-1/2
            translate-y-5
            translate-x-6
            bg-green-100
            -z-10
            rounded-tl-md
            rounded-tr
            rounded-bl
            rounded-br-xl
          "
        ></div>
      </div>

      {/* main */}
      <main>
        <h3 className="mb-1 text-neutral-600 font-semibold text-xl">
          {firstPart}
          <span className="block">
            {bar.join(" ")}
          </span>
        </h3>
        <p
          className="
            text-neutral-500 
            text-sm
          "
        >
          {frame.subHeading}
        </p>
      </main>
    </div>
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
        >
          Manage your entire community in a single system
        </h2>
        <p
          className="
        text-neutral-500
        "
        >
          Who is Nextcent suitable for?
        </p>
      </div>

      {/* Frome */}
      <div
        className="
          flex 
          gap-4
          flex-wrap
          itmes-center
          justify-center md:justify-evenly
          text-center
        "
      >
        {communityFrames}
      </div>
    </section>
  );
};

export default Community;

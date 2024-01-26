import frames from "../../data/community";
import Heading from "../../ui/Heading";

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
          <span className="block">{bar.join(" ")}</span>
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
const CommunityFrames = ({frames}) => {
  return frames.map(({ icon, frame }, index) => (
    <Frame key={index} icon={icon} frame={frame} />
  ));
};

const Community = () => {
  return (
    <section
    id="community"
      className="
      container mx-auto
      mb-6
      "
    >
      {/* Commuity section */}
      <Heading
        heading="Manage your entire community in a single system"
        subHeading="Who is Nextcent suitable for?"
      />

      {/* Frome */}
      <div
        className="
          flex 
          gap-4
          flex-wrap
          itmes-center
          justify-center md:justify-around
          text-center
        "
      >
        <CommunityFrames frames={frames} />
      </div>
    </section>
  );
};

export default Community;

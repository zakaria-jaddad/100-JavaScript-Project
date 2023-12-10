import Heading from "../../ui/Heading";
import CommunityUpdateFrames from "../../ui/CommunityUpdatesFram";

const CommunityUpdates = () => {
  return (
    <section className="container mx-auto">
      <Heading
        heading="Caring is the new marketing"
        subHeading="The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more."
      />

      <div className="
        flex
        justify-around
        my-9
        flex-wrap
      ">
      <CommunityUpdateFrames />
      </div>
    </section>
  );
};

export default CommunityUpdates;

import logos from "../../data/clietns";

const Logo = ({ path, name }) => {
  return (
    <div
      className="
        flex 
        items-center
        justify-center 
        h-full
        w-fit
      ">
      <img
        className="
        w-9
        "
        src={path} alt={name} />
    </div>
  );
};

const Clients = () => {
  const partners = logos.map((element, index) => {
    return <Logo key={index} path={element.path} name={element.name} />;
  });

  return (
    <section className=" my-7 container mx-auto">
      <h2
        className="
        text-center
        text-3xl
        capitalize
        mb-2
        font-semibold
      "
      >
        our clients
      </h2>
      <p
        className="
          text-center
          text-neutral-500
          mb-4
        "
      >
        We have been working with some Fortune 500+ clients
      </p>

      {/* partners */}
      <div className="
        flex  
        h-16
        justify-between
      ">
      {partners}  
      </div>
    </section>
  );
};

export default Clients;

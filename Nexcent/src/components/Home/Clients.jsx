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
      "
    >
      <img
        className="
        w-9
        "
        src={path}
        alt={name}
      />
    </div>
  );
};

const Partners = ({ logos }) => {
  return logos.map((element, index) => {
    return <Logo key={index} path={element.path} name={element.name} />;
  });
};

const Clients = () => {

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

      {/* Partners section*/}
      <section className="
        partners-container
        flex
        overflow-hidden
        relative
        before:content-[''] before:h-full before:w-1/6 before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-white to-transparent z-10
        after:content-[''] after:h-full after:w-1/6 after:absolute after:top-0 after:right-0 after:bg-gradient-to-l from-white to-transparent z-10
      ">

        {/* start partners */}

      <div
        className="
        flex
        h-16
        justify-around
        min-w-full
        animate-carusel
        -z-10
      "
      >
        <Partners logos={logos} />
      </div>
      <div
        className="
        flex
        h-16
        justify-around
        min-w-full
        animate-carusel
        -z-10
      "
      >
        <Partners logos={logos} />
      </div>

        {/* End partners */}
      </section>
      
    </section>
  );
};

export default Clients;

import logos from "../../data/logos";
import Logos from "../../ui/Logo";




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

      {/* Logos section*/}
      <section className="
        Logos-container
        flex
        overflow-hidden
        relative
        before:content-[''] before:h-full before:w-1/6 before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-white to-transparent z-10
        after:content-[''] after:h-full after:w-1/6 after:absolute after:top-0 after:right-0 after:bg-gradient-to-l from-white to-transparent z-10
      ">

        {/* start Logos */}

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
        <Logos logos={logos} />
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
        <Logos logos={logos} />
      </div>

        {/* End Logos */}
      </section>
      
    </section>
  );
};

export default Clients;

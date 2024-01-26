import image from "/images/customers.png";
import logos from "../../data/logos";
import Logos from "../../ui/Logo";
import arrowRight from "/images/arrow-right.svg";

const Customers = () => {
  return (
    <section className="bg-silver py-6 my-9" id="blog">
      <div
        className="
      my-9
      flex  
      flex-wrap
      gap-x-12
      gap-y-8
      px-10
      container mx-auto
    "
      >
        {/* image */}
        <div
          className="
          flex
          justify-center
          items-center
          w-full md:w-auto
        "
        >
          <img
            className="
          w-56
          h-56
          rounded-md
          "
            src={image}
            alt="Tesla"
          />
        </div>

        <main
          className="
        flex-1  
        px-6 md:px-0
        text-center md:text-left
      "
        >
          {/* main content */}
          <div className="mb-5">
            <p className="text-line-grey text-xs mb-3">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3 className="text-primary mb-1">Tim Smith</h3>
            <p className="text-sub-line-grey text-sm">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div
            className="
            flex  
            flex-col sm:flex-row
            flex-wrap
            gap-x-5
            gap-y-2
          "
          >
            {/* icons */}
            <div
              className="
            flex  
            flex-row
            justify-between
            flex-1
          "
            >
              <Logos logos={logos} />
            </div>

            <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start gap-2">
              <a href="#" className="text-sm text-primary">
                Meet all customers
              </a>
              <div>
                <img src={arrowRight} alt="arrow right" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Customers;

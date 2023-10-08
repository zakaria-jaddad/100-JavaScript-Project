import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Achievements() {
  const [count, setCount] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCount(true)}>
      <section className="bg-secondary py-10 ">
        <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0 flex flex-col sm:flex-row gap-4  max-h-full md:h-[300px] ">
          <div className="lg:text-3xl font-medium flex gap-4 w-full sm:w-3/12 m-auto lg:flex-1   ">
            <div className="flex flex-1 flex-col justify-center gap-4">
              <div className="flex flex-col gap-2">
                <h1 className=" text-neutralGray font-bold ">Helping Local</h1>
                <h1 className=" text-primary capitalize font-bold ">
                  business reinvent itself
                </h1>
              </div>
              <p className="text-neutralGray text-sm">
                We reached here with our hard work and dedication
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:flex-1 ">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-4 ">
              <div className="flex gap-4 ">
                <img src="members.svg" alt="image" loading="lazy"></img>
                <div className="text-neutralGray">
                  <span className="text-sm sm:text-xl font-bold lg:text-2xl ">
                    {count && (
                      <CountUp
                        start={0}
                        end={224541}
                        duration={3}
                        delay={0}
                      ></CountUp>
                    )}
                  </span>
                  <h1 className="text-sm font-light ">Members</h1>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="clubs.svg" alt="image" loading="lazy"></img>
                <div className="text-neutralGray">
                  <span className="text-sm sm:text-xl font-bold lg:text-2xl ">
                    {count && (
                      <CountUp
                        start={0}
                        end={46328}
                        duration={3}
                        delay={0}
                      ></CountUp>
                    )}
                  </span>
                  <h1 className="text-sm font-light ">Clubs</h1>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="eventbooking.svg" alt="image" loading="lazy"></img>
                <div className="text-neutralGray">
                  <span className="text-sm sm:text-xl font-bold lg:text-2xl ">
                    {count && (
                      <CountUp
                        start={0}
                        end={828867}
                        duration={3}
                        delay={0}
                      ></CountUp>
                    )}
                  </span>
                  <h1 className="text-sm font-light ">Eveng Bookings</h1>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="payments.svg" alt="image" loading="lazy"></img>
                <div className="text-neutralGray">
                  <span className="text-sm sm:text-xl font-bold lg:text-2xl ">
                    {count && (
                      <CountUp
                        start={0}
                        end={1926436}
                        duration={3}
                        delay={0}
                      ></CountUp>
                    )}
                  </span>
                  <h1 className="text-sm font-light ">Payments</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}

export default Achievements;

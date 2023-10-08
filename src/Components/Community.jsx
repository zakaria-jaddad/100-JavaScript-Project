import React from "react";

function Community() {
  return (
    <section className="py-10"> 
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="md:text-3xl w-full text-neutralGray font-bold lg:w-1/2 xl:w-[40%] m-auto text-center">
            Manage your entire community in a sigle system
          </h1>
          <p className="text-neutralGray text-sm ">
            Who is Nextcent suitable for?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="w-full border-gray-100 border-[0.5px] h-[300px] flex flex-col items-center shadow-sm ">
              <div className=" flex items-center justify-center h-screen flex-col gap-4 ">
                <div className="w-[56px] h-[49px] rounded-s-lg rounded-br-2xl  bg-tint relative">
                  <div className="absolute -top-2 -left-3 ">
                    <img src="people.svg" loading="lazy" alt="picture"></img>
                  </div>
                </div>
                <div className=" text-center gap-4 px-4 flex flex-col items-center justify-center">
                  <h1 className="text-neutralGray font-bold lg:text-2xl">
                    Membership Organization
                  </h1>
                  <p className="text-neutralGray text-sm">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full border-gray-100 border-[0.5px] h-[300px] flex flex-col items-center shadow-sm ">
              <div className=" flex items-center justify-center h-screen flex-col gap-4 ">
                <div className="w-[56px] h-[49px] rounded-s-lg rounded-br-2xl  bg-tint relative">
                  <div className="absolute -top-2 -left-3 ">
                    <img src="building.svg" loading="lazy" alt="picture"></img>
                  </div>
                </div>
                <div className=" text-center gap-4 px-4 flex flex-col items-center justify-center">
                  <h1 className="text-neutralGray font-bold lg:text-2xl">
                    National Associations
                  </h1>
                  <p className="text-neutralGray text-sm">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full border-gray-100 border-[0.5px] h-[300px] flex flex-col items-center shadow-sm">
              <div className=" flex items-center justify-center h-screen flex-col gap-4 ">
                <div className="w-[56px] h-[49px] rounded-s-lg rounded-br-2xl  bg-tint relative">
                  <div className="absolute -top-2 -left-3">
                    <img src="hands.svg" loading="lazy" alt="picture"></img>
                  </div>
                </div>
                <div className=" text-center gap-4 px-4 flex flex-col items-center justify-center">
                  <h1 className="text-neutralGray font-bold lg:text-2xl">
                    Clubs And Groups
                  </h1>
                  <p className="text-neutralGray text-sm">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;

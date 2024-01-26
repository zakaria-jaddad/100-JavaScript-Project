import Demo from "./Demo";
import nexcent from "/Logo-light.svg";
import Social from "../../ui/Social";
import socials from "../../data/social";
import Ul from "../../ui/Ul";
import footerlist from "../../data/footerlist";
import StayUpToDate from "../../ui/StayUpToDate";

const Socials = ({ social }) => {
  return social.map((social) => {
    return <Social {...social} />;
  });
};

const Footer = () => {
  return (
    <main>
      <Demo />

      {/* secttion 1 */}
      <section className="text-line-white bg-secondary">
        <div className="container mx-auto py-[44px] flex gap-x-[87px] gap-y-[20px] justify-around flex-wrap">
          <div
            className="
            flex
            flex-col
            gap-y-[27px]
          "
          >
            <div className="flex flex-col gap-y-[27px] items-center sm:items-start">
              <img className="h-[30px] w-[140px]" src={nexcent} alt="logo" />
            </div>

            <div className="text-sm flex flex-col gap-y-1">
              <p>Copyright © 2020 Landify UI Kit</p>
              <p>
                Made with{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  className="text-primary font-bold"
                >
                  Zakaria Jaddad + 🤍
                </a>
              </p>
            </div>

            <div className="flex gap-x-[14px]">
              <Socials social={socials} />
            </div>
          </div>

          {/* ul */}
          <div className="flex gap-[20px] flex-wrap justify-center text-center sm:text-left">
            <Ul list={footerlist} />

            <StayUpToDate />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Footer;

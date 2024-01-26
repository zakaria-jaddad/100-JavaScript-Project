import send from "/images/send.svg";

const StayUpToDate = () => {
  return (
    <div className="w-[200px] flex flex-col gap-5 text-center sm:text-left">
      <h3 className="mb-[12px] font-semibold">Stay up to date</h3>
      <form className="w-[200px] h-[30px] flex bg-sub-line-grey rounded-md px-[9px] text-sm" action="mailto:zakaria.jaddad26@gmail.com">
        <input  className="h-full w-full outline-none bg-transparent border-none placeholder:italic text-xs text-[#D9DBE1] placeholder:text-[#D9DBE1]" type="email" placeholder="Your email address" />
        <button className="h-full w-[30px] flex justify-center items-center">
          <img className="h-[15px] w-[15px] " src={send} alt="send Email" />
        </button>
      </form>
    </div>
  );
};
export default StayUpToDate;

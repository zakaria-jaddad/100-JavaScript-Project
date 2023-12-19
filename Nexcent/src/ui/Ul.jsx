const Li = ({ links }) => {
  return links.map((link) => (
    <li className="w-auto h-full flex items-center">
      <a className="w-auto" href={"#" + link.toLowerCase()} style={{fontSize: "inherit"}}>
        {link}
      </a>
    </li>
  ));
};

const Ul = ({ list, listStyle }) => {
  return list.map(({ heading = null, links }) => {
    return (
      <div>
        <h3
          className={heading !== null ? "mb-[12px] font-semibold w-auto" : ""}
        >
          {heading}
        </h3>
        <ul className={listStyle}>
          <Li links={links} />
        </ul>
      </div>
    );
  });
};
export default Ul;

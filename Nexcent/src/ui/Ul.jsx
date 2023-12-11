const Li = ({ links }) => {
    return links.map(link => <li><a href={'#' + link.toLowerCase()}>{link}</a></li>)
};

const Ul = ({list}) => {
 
  return list.map(({heading, links, ulStyle = 'flex flex-col gap-y-[10px] text-xs'}) => {
    return (
    <div className="">
      <h3 className="mb-[12px] font-semibold">{heading}</h3>
      <ul className={ulStyle}>
        <Li links={links} />
      </ul>
    </div>
    )
  })
};
export default Ul;

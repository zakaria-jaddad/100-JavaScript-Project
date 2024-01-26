
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

const Logos = ({ logos }) => {
  return logos.map((element, index) => {
    return <Logo key={index} path={element.path} name={element.name} />;
  });
};

export default Logos;
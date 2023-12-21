function Avatar({ size = 100, persone}) {
    return (
      <div
        className="
          p-10
          w-fit
          bg-slate-100
          border
          rounded-lg
          border-gray-300
        "
      >
        <img
          className="
            rounded-lg
          "
          src={persone.imgUrl}
          alt={persone.name}
          width={size}
          height={size}
        />
      </div>
    );
  }
  

export default Avatar;
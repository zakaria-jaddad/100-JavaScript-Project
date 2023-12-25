const Item = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating: { rate, count },
}) => {
  return (
    <div key={id}>
      <div>{title}</div>
      <div>{price}</div>
      <div>{description}</div>
      <div>{category}</div>
      <div>
        {rate} {count}
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Item;

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
    <div key={id} style={{border: "1px solid #000", margin: "30px", padding: "15px", textAlign: "center"}}>
      <div>{title}</div>
      <div>{price}</div>
      <div>{description}</div>
      <div>{category}</div>
      <div>
        {rate} {count}
      </div>
      <img src={image} alt="" height={100} width={100} style={{margin: "auto"}}/>
    </div>
  );
};

export default Item;

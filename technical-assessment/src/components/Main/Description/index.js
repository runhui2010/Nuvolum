import StarRatings from "react-star-ratings";

const Description = ({ product }) => {
  if (Object.keys(product).length > 0) {
    return (
      <div>
        <div className="price">$ {product.price}</div>
        <div className="description">{product.description}</div>
        <div>
          <StarRatings
            rating={product.rating.rate}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="#ffe135"
            starEmptyColor="#e5e6eb"
          />
          <span> ({product.rating.count})</span>
        </div>
        <div className="add_btn">
          <button >Add to Cart</button>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Description;

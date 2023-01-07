const productPlaceholderImg = "/images/product-placeholder.svg";

function ProductCard(props) {
  const { title, price, description, url, image } = props;
  return (
    <div className="card">
      <img
        src={image || productPlaceholderImg}
        className="card-img-top"
        alt="Product 1"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default ProductCard;

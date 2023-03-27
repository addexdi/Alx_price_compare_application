import "./ProductList.css"

const ProductLists = ({productSize = "", objectSize, imageURL, name}) => {
    const size = productSize === "large" ? 'product--lg' : 'product--sm';
    return (
        <div className={`product ${size}`}>
            <div className="product__image">
                <img src={imageURL} alt="cameras" style={{objectFit: `${objectSize}`}}/>
            </div>
            <p className="product__name">{name}</p>
        </div>
    )
}

export default ProductLists
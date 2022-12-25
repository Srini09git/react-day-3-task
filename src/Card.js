// creating card Component
export function Card({ product, addToCart, cartList }) {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card" style={{ width: "17rem" }}>
                <img src={product.imageUrl} className="card-img-top" alt="https://picsum.photos/200/100" />
                <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <h5 className="card-text">Rs:{product.price}</h5>
                    <h6>Rating: {product.Rating}</h6>
                    <button disabled={cartList.some(item => item.id === product.id)} className="btn btn-primary" onClick={() => addToCart(product)} >Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

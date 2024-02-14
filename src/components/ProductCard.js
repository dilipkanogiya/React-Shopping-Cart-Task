import { useState } from "react";

const ProductCard = ({ product, addToCart, removeFromCart, cartQuantity }) => {
    const {id, name, poster, price, addedToCart} = product;

    return (
        <>
            <div className="col mt-3 mb-2" key={id}>
                <div className="card h-100">
                    {/* Product image */}
                    <img className="card-img-top" src={poster} alt={name} />
                    {/* Product details */}
                    <div className="card-body px-4">
                        <div className="text-center">
                            {/* Product name */}
                            <h5 className="fw-bolder">{name}</h5>
                            {/* Product price */}
                            { price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </div>
                    </div>
                    {/* Product actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            { addedToCart ? <button className="btn btn-outline-dark mt-auto" onClick={ () => removeFromCart(id)}>Remove from Cart</button>
                                : <button className="btn btn-outline-dark mt-auto" onClick={ () => addToCart(id)}>Add to Cart</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard;
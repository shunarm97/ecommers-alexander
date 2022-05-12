const CartProduct = ({prodObj}) => {
    return (
        <div>
            <h1>{prodObj.product.name}</h1>
            <h3>Cantidad: {prodObj.quantity} </h3>
            <h3>Total: ${prodObj.product.price * prodObj.quantity}</h3>
        </div>
    )
}

export default CartProduct
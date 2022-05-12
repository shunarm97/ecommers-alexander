import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartProduct from "../components/CartProduct"
import { setCartProductsThunk } from "../redux/actions"

const Cart = () => {

    const dispatch = useDispatch()

    const cartValues  = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(setCartProductsThunk())
    }, [dispatch])

    const list = cartValues.map((item) => {
        return <CartProduct key={item.id} prodObj={item} />
    })

    return (
        <div>
            <h1>Cart</h1>
            {list}
        </div>
    )
}

export default Cart
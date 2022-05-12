import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInfoProductThunk } from "../redux/actions";
import { addProductToCart } from "../services";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productInfo);

  const [quantity, setQuantity] = useState(0)
  const [confirm, setConfirm] = useState(false)

  useEffect(() => {
    dispatch(setInfoProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if(quantity && confirm){
      addProductToCart({
        product: id,
        quantity: quantity
      })
        .then((res) => {
          console.log(res)
          setConfirm(false)
        })
    }
  }, [quantity, confirm, id])


  const decrement = () => {
    if(quantity > 0){
      setQuantity(quantity - 1)
    }
  }
 
  return (
    <div>
        <h1>{product.name}</h1>
        <div>
          <button onClick={decrement}>-</button>
          {quantity}
          <button onClick={() => setQuantity(quantity + 1)} >+</button>
          <br/>
          <button onClick={() => setConfirm(true)} >Add To Cart</button>
        </div>
        <p>{product.description}</p>
        {product.images?.map((item) => <img src={item.url} alt='' key={item.id} />)}
    </div>
  );
};

export default Product;

import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector(store =>store.cart.items);
    const dispatch = useDispatch();
    
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    // const store = useSelector(store=>store) not good way not optimize 

    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
            <button className="bg-red p-2 m-5" onClick={()=>{handleClearCart()}}>clear Cart</button>
            <div className="flex ">
                {cartItems.map((item) => (<FoodItem key={item.id} {...item} />))}
            </div>
        </div>
    )

}

export default Cart;
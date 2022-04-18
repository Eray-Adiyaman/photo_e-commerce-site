import { useContext } from "react"
import { Context } from "../contexts/Context"

function CartItem({item}){

    const{removeFromCart}= useContext(Context)

    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={()=>removeFromCart(item)}></i>
            <img src={item.url} alt="alt" width="150px" />
            <span>₺19.99</span>
        </div>
    )
}


export default CartItem
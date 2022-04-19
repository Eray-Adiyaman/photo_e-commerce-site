import { useContext,useState } from "react"
import { Context } from "../contexts/Context"

function CartItem({item}){

    const [hovered,setHovered] = useState(false)
    const{removeFromCart}= useContext(Context)

    const trashbinIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return(
        <div className="cart-item">
            <i 
                className={`${trashbinIcon}`}
                onClick={()=>removeFromCart(item)}
                onMouseEnter={()=> setHovered(true)}
                onMouseLeave={()=> setHovered(false)}
               ></i>
            <img src={item.url} alt="alt" width="150px" />
            <span>₺19.99</span>
        </div>
    )
}


export default CartItem
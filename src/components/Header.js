import { useContext } from "react"
import {Link} from "react-router-dom"
import { Context } from "../contexts/Context"

function Header(){

    const {cartItems} = useContext(Context)


    // instead of using conditional rendering for 2 cart icons,i can use string interpolation for cart icon classname =>
    // const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x" && classname={`${cartClassName}`} both works
    // see -> cartitem component trashbin

    return(
        <header>
           <Link to="/"><h2>Photom</h2></Link> 
           <Link to="/cart">
               {cartItems.length >0 
               ?<i className="ri-shopping-cart-fill ri-fw ri-2x"></i>  
               :<i className="ri-shopping-cart-line ri-fw ri-2x"></i>
               }
           </Link>
        </header>
    )
}


export default Header
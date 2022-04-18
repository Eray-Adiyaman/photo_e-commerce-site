import { useContext, useState } from "react"
import { Context } from "../contexts/Context"
import CartItem from "../components/CartItem"
function Cart(){

    const {cartItems,emptyCart} = useContext(Context)
    const [buttonText,setButtontext] = useState("Place Order")

    const cartElements = cartItems.map(item => <CartItem key={item.id} item={item} />)

    const totalCost = (cartItems.length * 19.99).toLocaleString("tr-TR", {style:"currency", currency:"TRY"})

    const placeOrder=()=>{
        setButtontext("Completing Order...")
        setTimeout(() => {
            console.log("OrderPlaced!")
            setButtontext("Place Order")
            emptyCart()
        }, 2000);
    }

    return(

        <main className="cart-page">
            <h1>Checkout here</h1>
            {cartElements}
            <p className="total-cost"> Total: {totalCost} </p>
            <div className="order-button">
                 <button onClick={placeOrder}>{buttonText}</button>
            </div>
        </main>
           
    )
}

export default Cart
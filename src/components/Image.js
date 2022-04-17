import { useContext, useState } from "react"
import { Context } from "../contexts/Context"


function Image({className,img}){

    const [hovered,setHovered] = useState(false)
    const {toggleFavorite,addToCart,cartItems,removeFromCart} = useContext(Context)


    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === img.id)
        if(isInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
        }else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    
   
   
    
    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={()=> setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
        >
            <img src={img.url} alt="to shut up ESlint " className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )

}


export default Image
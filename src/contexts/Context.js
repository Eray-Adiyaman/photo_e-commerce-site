const { createContext, useState, useEffect } = require("react");

const Context = createContext()

function ContextProvider(props){

    const [allPhotos,setAllphotos] =useState([])
    const [cartItems,setCartitems] = useState([])


    const url ="https://api.jsonbin.io/b/625682fadc6e0124e8bfdc43/2";

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAllphotos(data))

    },[])


    const toggleFavorite =(id)=>{
        const updatedArray = allPhotos.map(photo => {
            if(photo.id === id){
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setAllphotos(updatedArray)
    }


    const addToCart=(imgObj)=>{
        setCartitems(prev => [...prev,imgObj])
    }

    const removeFromCart=(imgObj)=>{
        setCartitems(cartItems.filter(item => item !== imgObj))
    }

    return (
        <Context.Provider value={{allPhotos,cartItems,toggleFavorite,addToCart,removeFromCart}}>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider,Context}
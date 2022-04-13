const { createContext, useState, useEffect } = require("react");

const Context = createContext()

function ContextProvider(props){

    const [allPhotos,setAllphotos] =useState([])

    const url ="https://api.jsonbin.io/b/625682fadc6e0124e8bfdc43/2";

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAllphotos(data))

    },[])


    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider,Context}
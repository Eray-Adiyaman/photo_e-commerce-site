import Image from "../components/Image"
import {getClass} from "../utils"
import { useContext } from "react"
import { Context } from "../contexts/Context"

function Photos (){

 const {allPhotos} = useContext(Context);

 const PhotoElements = allPhotos.map((photoObj,i) => <Image key={photoObj.id} img={photoObj} className={getClass(i)} />)


return(
    <main className="photos">
        {PhotoElements}
    </main>
)

}


export default Photos
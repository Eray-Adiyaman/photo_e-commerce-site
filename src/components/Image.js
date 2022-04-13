

function Image({className,img}){

    return(
        <div className={`${className} image-container`}>
            <img src={img.url} alt="to shut up ESlint " className="image-grid"/>
        </div>
    )

}


export default Image
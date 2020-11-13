import React, {useEffect, useRef, useState} from 'react';

function ImageCard({image}) {
    const [spans, setSpans] = useState(0)
    const imageRef = useRef()

    // First Way
    // useEffect(() => {
    //     imageRef.current.addEventListener('load', ()=>{
    //         console.log(imageRef.current.height)
    //     })
    // }, [])

    // Second Way
    const loadImg = () => {
        const height = imageRef.current.height
        const span = Math.ceil(height / 10 )

        setSpans(span)
    }

    return (
        <div style={{gridRowEnd: `span ${spans}`}}>
            <img
                onLoad={loadImg}
                ref={imageRef}
                src={image.urls.regular}
                alt={image.description}/>
        </div>
    );
}

export default ImageCard;
import React from 'react';
import './ImageList.css'
import ImageCard from "./ImageCard";

function ImageList(props) {

    const images = props.images.map((item) =>
        <ImageCard key={item.id} image={item}/>
    )

    return (
        <div className='image-list'>
            {images}
        </div>
    );
}

export default ImageList;


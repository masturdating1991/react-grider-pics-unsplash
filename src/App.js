import React, {useState} from 'react';
import unsplash from "./Api/unsplash";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

function App() {

    const [images, setImage] = useState([])

    const onSearchSubmit = (term) => {
        unsplash.get("/search/photos", {
            params: {query: term}
        }).then(res => {
            setImage(res.data.results)
        })
    }

    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App;

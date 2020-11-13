import React, {useState} from 'react';

function SearchBar(props) {

    const [term, setTerm] = useState('')

    const onFormSubmit = e => {
        e.preventDefault()
        props.onSubmit(term)
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="filed">
                    <label htmlFor="search" style={{fontWeight: 'bold'}}>Image Search</label>
                    <input
                        type="text"
                        id="search"
                        placeholder="what pic you need? type and hit enter on your keyboard"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        style={{marginTop: '7px'}}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
import { useState } from 'react';

const Search = ({ searchText }) => {

    const [text, setText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="input-text"
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    placeholder="e.g. Trump"
                   
                />
                {/* <button type="submit" className='btn'>search</button> */}

            </form>
           
        </>
    )
}

export default Search
import { useState } from 'react';

const Search = ({ searchCountry }) => {

    const [text, setText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        searchCountry(text)
        
    }
    return (
        <>    
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="input-text"
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    placeholder=" type in country code, e.g. lt"
                   
                />
                {/* <button type="submit" className='btn'>search</button> */}

            </form>
           
        </>
    )
}

export default Search
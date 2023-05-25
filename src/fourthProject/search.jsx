import React, {useEffect, useState} from 'react';
import initialData from '../data/search.json';
import './search.scss'

const Search = () => {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {
        setData(initialData);
    }, []);

    return (
        <div className='search-container'>
            <input className='search-input' type="text" placeholder='Search dog...' onChange={event => {
                setSearchTerm(event.target.value)
            }}/>
            <div className="dog-album">
                {data && data.filter((value)=> {
                    if (searchTerm === "") {
                        return value
                    } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value
                    }
                    return ""
                }).map((item, index) => (
                    <div className='dog' style={{backgroundImage: `url(${item.photo})` }} key={index}>

                        <p>{item.name}</p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Search;

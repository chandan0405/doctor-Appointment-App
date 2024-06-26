import React, { useState } from 'react'
import { SearchIcon } from "../assets"

const ChannelSearch = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    async function getChannels(text)
    {
       try {
        // Todo: fetch channels
       } catch (error) {
          setQuery('');
       }
    }

    const onSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value);
    }
    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className='channel-search__input__icon'>
                    <SearchIcon />
                </div>
                <input className='channel-search__input__text'
                    placeholder='search..'
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch
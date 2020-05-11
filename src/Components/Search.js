import React, { useState } from 'react';
import { useSelector } from "react-redux";
import CommonEventsList from './CommonEventsList';
import { searchEventsByQuery } from '../services/Events'
import LoadingAnimator from './Utils/LoadingAnimator';

const Search = ({ }) => {

    const SEARCH_TIMEOUT = 500;
    let pressedKeyCounter = 0;

    const [isLoading, setIsLoading] = useState(false);
    const events = useSelector(state => state.eventsState.searchSelection.events);

    const handleChange = async (e) => {
        pressedKeyCounter++;
        let query = e.currentTarget.value;
        
        setTimeout(
            () => {
                pressedKeyCounter--;
                doSearch(query);
            },
            SEARCH_TIMEOUT
        );     
    }

    const doSearch = (query) => {
        if (query && pressedKeyCounter == 0) {
            setIsLoading(true);
            searchEventsByQuery(query)
                .then((_) => setIsLoading(false))
        }
    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Найдите событие" onChange={handleChange} />
            {isLoading ? <LoadingAnimator /> : <CommonEventsList events={events} />}
        </div>
    )
}

export default Search;
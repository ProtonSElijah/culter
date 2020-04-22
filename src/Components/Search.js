import React, { useState } from 'react';
import store from "../redux/store/store";
import { useSelector } from "react-redux";
import CommonEventsList from './CommonEventsList';
import {searchEventsByQuery} from '../services/Events'

const Search = ({ }) => {

    const [isTyping, setIsTyping] = useState(false);
    const events = useSelector(state => state.eventsState.searchSelection.events);

    const handleChange = (e) => {
        setIsTyping(true);
        let query = e.currentTarget.value;
        if (query) {
            setTimeout(() => { 
                if (!isTyping){
                    searchEventsByQuery(query) 
                }
            }, 1000);
        }
        
        setIsTyping(false);
    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Найдите событие" onChange={handleChange} />
            <CommonEventsList events={events} />
        </div>
    )
}

export default Search;
import React from 'react';
import MatchedPerson from "./MatchedPerson";

const MatchedList = ({list}) => {
    return list.map(
        person =>
            <div className="PersonList">
                {<MatchedPerson
                    imgLink={person.imgLink}
                    name={person.firstName + " " + person.lastName}
                    commonPlacesCount={person.commonPlacesCount}
                    commonPlaces={person.commonPlaces}
                />}
            </div>
    );
}

export default MatchedList;

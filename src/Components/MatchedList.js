import React from 'react';
import MatchedPerson from "./MatchedPerson";

const MatchedList = ({list}) => {
    return list.map(
        person =>
                <MatchedPerson
                    imgLink={person.imgLink}
                    name={person.firstName + " " + person.lastName}
                    commonPlacesCount={person.commonPlacesCount}
                    commonPlaces={person.commonPlaces}
                />
    );
}

export default MatchedList;

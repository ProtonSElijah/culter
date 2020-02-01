import React from 'react';

const MatchedScrollList = ({list}) => {
    return list.map(
        person =>
        <div className="ScrollContainerContent" key={person.key}>
            <div className="ScrollPerson">
                <img src={person.photo_400_orig} alt="Person" className="ScrollPeopleImg"/>
                <div>{person.first_name}</div>
                <div className="Cirle">{person.common_events.length}</div>
            </div>
        </div>
    );
}

export default MatchedScrollList;

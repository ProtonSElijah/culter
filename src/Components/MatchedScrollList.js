import React from 'react';

const MatchedScrollList = ({list}) => {
    return list.map(
        person =>
        <div className="ScrollContainerContent" key={person.id}>
            <div className="ScrollPerson">
                <img src={person.photo_400_orig} alt="Person" className="ScrollPeopleImg"/>
                <div>{person.first_name}</div>
                <div className="Cirle">{person.count_common_events}</div>
            </div>
        </div>
    );
}

export default MatchedScrollList;

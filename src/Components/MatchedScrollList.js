import React from 'react';

const MatchedScrollList = ({list}) => {
    return list.map(
        person =>
        <div className="ScrollContainerContent">
            <div className="ScrollPerson">
                <img src={person.imgLink} alt="Person" className="ScrollPeopleImg"/>
                <div>{person.firstName}</div>
            </div>
        </div>
    );
}

export default MatchedScrollList;

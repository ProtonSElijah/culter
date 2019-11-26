import React from 'react';

const MatchedScrollList = ({list}) => {
    return list.map(
        person =>
        <div className="ScrollContainerContent" key={person.key}>
            <div className="ScrollPerson">
                <img src={person.imgLink} alt="Person" className="ScrollPeopleImg"/>
                <div>{person.firstName}</div>
            </div>
        </div>
    );
}

export default MatchedScrollList;

import React, {useState} from 'react';

const MatchedList = ({list}) => {
    return list.map(
        person =>
            <div className="Person" key={person.key}>
                <img src={person.imgLink} alt={"Person photo"}/>
                <div className="PersonData">
                    <div className="PersonName"><b>{person.firstName + " " + person.lastName}</b></div>
                    <div className="PersonPlacesCount">Общих мест: <b>{person.commonPlacesCount}</b></div>
                    {person.commonPlaces.toString().length > 25 &&
                        <div className="PersonPlacesList">
                            {person.commonPlaces.toString().slice(0, 25) + ".."}
                        </div>}
                    {!(person.commonPlaces.toString().length > 25) &&
                        <div className="PersonPlacesList">
                            {person.commonPlaces.toString()}
                        </div>}
                </div>
            </div>
    );
}


/*    renderPlaces = () => {
        let str = this.props.commonPlaces.toString();
        if (str.length > 25)
            str = str.slice(0, 25) + "..";
        return str;
    };

    render() {
        return (
            <div className="Person" key={this.props.key}>
                <img src={this.props.imgLink} alt={"Person photo"}/>
                <div className="PersonData">
                    <div className="PersonName"><b>{this.props.name}</b></div>
                    <div className="PersonPlacesCount">Общих мест: <b>{this.props.commonPlacesCount}</b></div>
                    <div className="PersonPlacesList">
                        {this.renderPlaces()}
                    </div>
                </div>
            </div>
        );
    }*/
export default MatchedList;

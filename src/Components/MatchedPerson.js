import React, {Component} from 'react';

class MatchedPerson extends Component {

    constructor(props) {
        super(props);
    }

    renderPlaces = () => {
        let str = this.props.commonPlaces.toString();
        if (str.length > 25)
            str = str.slice(0, 25) + "..";
        return str;
    };

    render() {
        return (
            <div className="Person">
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
    }
}

export default MatchedPerson;

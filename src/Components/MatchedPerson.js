import React, {Component} from 'react';

class MatchedPerson extends Component {

    constructor(props) {
        super(props);
    }

    renderPlaces = () => {
        return this.props.commonPlaces.map(
            place =>
                <div> {place} </div>
        )
    };

    render() {
        return (
            <div>
                <img src={this.props.imgLink} alt={"Person photo"} width={200} height={200}/>
                <div>{this.props.name}</div>
                <div>Общих мест: <b>{this.props.commonPlacesCount}</b></div>
                <div>
                    {this.renderPlaces()}
                </div>
            </div>
        );
    }
}

export default MatchedPerson;

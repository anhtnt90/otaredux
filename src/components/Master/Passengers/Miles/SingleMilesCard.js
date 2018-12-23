import React, {Component} from 'react';

class SingleMilesCard extends Component {
    render() {
        return (
            <div className="row singleMilesCard">
                <div className="col-1"></div>

                <div className="col-2">
                    {this.props.data.name}
                </div>
                <div className="col-7">
                    <input type="text" placeholder="Miles card"
                           className="form-control"/>
                </div>


            </div>

        );
    }
}

export default SingleMilesCard;



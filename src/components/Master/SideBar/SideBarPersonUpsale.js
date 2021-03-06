import React from 'react';

const SideBarPersonUpsale = (props) => {
    return (
        <div key={props.pax.id}>
            <div className="row">
                <div className="col-12">
                    {props.pax.surname} {props.pax.name}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {props.description}
                </div>
            </div>
        </div>
    )
};

export default SideBarPersonUpsale;

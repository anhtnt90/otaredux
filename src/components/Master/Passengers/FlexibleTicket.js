import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';


import * as actsUpsales from '../../../actions/master/actionsUpsales';



class FlexibleTicket extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.props.changeFlexibleTicketHandler((ev.target.value == 1));
  }

  render() {
    let  price = (this.props.passengers.filter(px => px.active === true).length * this.props.flexibleTicket.pricePerPax).toFixed(2);
      price *= this.props.currency.rate;
      price = price.toFixed(2);

    return (
        <section>

      <div className="row contactDetails">
        <div className="col-8">

          <div className="card">
            <div className="card-header bg-light">

              <div className="row">

                <div className="col-3">

                                    Flexible Ticket
                </div>

                <div className="col-2 offset-6">
                  <button
                    className="btn btn-sm btn-dark btn-block btnToggle"
                    data-toggle="collapse"
                    data-target="#flexibleTicketCollapse"
aria-expanded="false"
                    aria-controls="collapseExample"
                  >

                                       <Translate value="general.Toggle"/>
</button>
                </div>

              </div>
            </div>


            <div className="card-body collapse show" id="flexibleTicketCollapse">

              <div className="row">
                <div className="col-8">

                   Pay
                    {' '}
                  {price}
                  {' '}
                  {this.props.currency.code}
                  {' '}
and you may
                                    cancel/amend your ticket for free!
                </div>

                <div className="col-3">

                  <select className="form-control" onChange={this.handleClick}>
                    <option key="no" value="0">No thanks</option>
                    <option key="yes" value="1">Yes please</option>
                  </select>

                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
        </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    passengers: state.passengersMasterReducer,
    currency: state.currentCurrencyReducer,
    flexibleTicket: state.flexibleTicketReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    changeFlexibleTicketHandler: actsUpsales.changeFlexibleTicketAction,

  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(FlexibleTicket);


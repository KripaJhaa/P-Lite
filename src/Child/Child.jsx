import React, { Component } from 'react'
import ChildDetails from './ChildDetails'
import RecentTx from './RecentTx'
import QRCodePayemnt from './QRCodePayment'
import SpendAnalysis from './SpendAnalysis'
import './Child.scss';
export default class Child extends Component {

    render() {
        // Common header with input for notification
        return <>
            <div className="Scrappy-ui">
                <h1>Child Page</h1>
            </div>
            <div className="profile_snapshot">
                <ChildDetails />
                <RecentTx />
            </div>
            <hr/>
            <div className="transaction_details">
                <QRCodePayemnt />
                <SpendAnalysis />
            </div>
        </>
    }
}

import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'

import ChildDetails from './ChildDetails'
import RecentTx from './RecentTx'
import { QRCodePayemnt } from './QRCodePayment'
import SpendAnalysis from './SpendAnalysis'
import './Child.scss';
import { ToastContainer } from "react-toastify"




export default class Child extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)


        const location = window.document.location;
        const query = new URLSearchParams(location.search);
        const idParam = query.get('id');
        
        const childData = {
            "userInfo": {
                userName: "Hunter biden",
                approver: "Joe Biden",
                createdAt: "10-12-2022",
                perTxLimit: "100 ₹",
                monthlyTxLimit: "2000 ₹"
            },
            "recentTransactions": [
                { "date": "22-10-2022", "to": "Mr Elon Musk", "amount": "200 ₹", "tag": "Misc" },
                { "date": "23-10-2022", "to": "Mr Rob Sam", "amount": "77 ₹", "tag": "groceries" },
                { "date": "24-10-2022", "to": "Mr Tony Stark", "amount": "20 ₹", "tag": "movies" },
                { "date": "25-10-2022", "to": "Mrs Wanda Maximoff", "amount": "150 ₹", "tag": "movies" }
            ]
        }

        const parentData = {
            "userInfo": {
                userName: "Senior biden",
                approver: "Joe Biden",
                createdAt: "08-08-2022",
                perTxLimit: "900 ₹",
                monthlyTxLimit: "12000 ₹"
            },
            "recentTransactions": [
                { "date": "22-10-2022", "to": "Mr Mark Zuckerburg", "amount": "500 ₹", "tag": "movies" },
                { "date": "23-10-2022", "to": "Mr  Stark", "amount": "920 ₹", "tag": "movies" },
                { "date": "24-10-2022", "to": "Mr Devanand", "amount": "777 ₹", "tag": "groceries" },
                { "date": "25-10-2022", "to": "Mr Akshay Kumar", "amount": "200 ₹", "tag": "Misc" }
            ]
        }

        const isChild = this.props.dependentChild
        const data = isChild ? childData : parentData

        return <>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            /> */}
            <div className="Scrappy-ui">
                <h1>Child Page</h1>
            </div>
            <div className="profile_snapshot">
                <ChildDetails userInfo={data.userInfo} />
                <RecentTx transactions={data.recentTransactions} />
            </div>
            <hr />
            <div className="transaction_details">
                <QRCodePayemnt id={idParam} notify={this.props.notify}/>
                <SpendAnalysis />
            </div>
        </>
    }
}

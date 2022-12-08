import React, { Component } from 'react'
import BasicUserInformation from './BasicUserInformation';
import RecentTx from './RecentTx';


export default class ChildDetails extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const userInfo = this.props.userInfo
        // const userInfo = {
        //     userName: "Hunter biden",
        //     approver: "Joe Biden",
        //     createdAt: "10-12-2022",
        //     perTxLimit: "100",
        //     monthlyTxLimit: "2000"
        // }
        return <>
            <div className='child_details_container'>
                <h2 style={{"margin-bottom": "25px", "margin-left": "75px", "padding": "10px"}}>Child Details</h2>
                <BasicUserInformation userInfo={userInfo}/>
            </div>
        </>
    }
}

import React, { Component } from 'react'
import BasicUserInformation from './BasicUserInformation';


export default class ChildDetails extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const userInfo = this.props.userInfo
        return <>
            <div className='child_details_container'>
                <h2 style={{"margin-bottom": "25px", "margin-left": "75px", "padding": "10px"}}>Child Details</h2>
                <BasicUserInformation userInfo={userInfo}/>
            </div>
        </>
    }
}

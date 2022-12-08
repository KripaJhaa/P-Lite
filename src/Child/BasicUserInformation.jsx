import React, {Component} from 'react';

export default (props) => {
    const userInfo = props.userInfo
    return (
        <div className="child_details">
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" alt="Avatar"/>
                        <div style={{ "display": "flex" , "flex-direction": "column","padding-top": "7px"}}>
                            <strong >Username</strong><p>{userInfo.userName}</p>
                            <strong >Approver</strong><p>{userInfo.approver}</p>
                        </div>
                    </div>
                    <div style={{ "margin-left": "50px" }}>
                        <div style={{ "display": "flex" , "flex-direction": "column", "padding-top": "15px"}}>
                            <strong style={{ "margin-right": "50px" }}>CreatedAt</strong><p>{userInfo.createdAt}</p>
                            <strong style={{ "margin-right": "50px" }}>Per Transaction Limit</strong><p>{userInfo.perTxLimit}</p>
                            <strong style={{ "margin-right": "50px" }}>Montly Transaction Limit</strong><p>{userInfo.monthlyTxLimit}</p>
                        </div>
                    </div>
                </div>
    )
}

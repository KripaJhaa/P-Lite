import React, { Component } from 'react'
import './Child.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class QRCodePayemnt extends Component {
    render() {
        return (
            <div style={{ "display": "flex", "flex-direction": "column" }}>
                <h2 style={{ "text-align": "center" , "padding": "10px"}}>QR Code Scan</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/628/628651.png?w=1480&t=st=1670534472~exp=1670535072~hmac=b6890398f07d77c5ac7e36975e9163ad836f480d98ee861b96db1519a9a3ee28" style={{ "width": "300px", "padding": "20px" }} alt="Avatar" />
                <Form style={{"text-align": "center"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount Payable</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" />
                        <Form.Text className="text-muted">
                            Cross check the amount entered.
                        </Form.Text>
                    </Form.Group>
                    <Button  style={{"background-color": "purple"}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

import React, { Component, useState } from 'react'
import './Child.scss';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {toast} from "react-toastify"

export function QRCodePayemnt(props) {
    const [amount, setAmount] = useState(0)
    const {id} = props
    const baseUrl = "http://10.57.15.202:9001/transaction"
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (item) => {
        const body = {
            "user_id": id,
            "merchant_upi_id": "9206255221@upi",
            "transaction_amount": parseInt(amount)
        }

        axios.post(baseUrl, body).then((response) => {
            toast.success(`Succesfully paid the amount ${amount}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }).catch((error)=>{
            console.log(error);
            toast.warning(`Failed to paid the amount ${amount}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        });
        reset();
    }

        return (
            <div style={{ "display": "flex", "flex-direction": "column" }}>
                <h2 style={{ "text-align": "center" , "padding": "10px"}}>QR Code Scan</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/628/628651.png?w=1480&t=st=1670534472~exp=1670535072~hmac=b6890398f07d77c5ac7e36975e9163ad836f480d98ee861b96db1519a9a3ee28" style={{ "width": "300px", "padding": "20px" }} alt="Avatar" />
                <Form style={{"text-align": "center"}} onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" on>
                        <Form.Label>Amount Payable</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)}/>
                        <Form.Text className="text-muted"  {...register("amount")}>
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

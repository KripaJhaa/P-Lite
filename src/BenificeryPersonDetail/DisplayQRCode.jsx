import React from 'react'
import { PersonFill } from 'react-bootstrap-icons'
import axios from "axios";

export default (props) => {
    const approveQR = (e) => {
        const baseURL = "http://10.57.15.202:9001/register/"+props.phone_number;
        e.preventDefault()
        axios.patch(baseURL,{
            "verification_status": "COMPLETED"
          }).then((resp) => {
            props.setStatus("COMPLETED")
            console.log("Display QR COde res:", resp)
        })
        // props.status="COMPLETED"

    }
    return props.shouldDisplayQR ? <img src="https://cdn-icons-png.flaticon.com/512/628/628651.png?w=1480&t=st=1670534472~exp=1670535072~hmac=b6890398f07d77c5ac7e36975e9163ad836f480d98ee861b96db1519a9a3ee28" style={{ "width": "45px", "padding": "5px" }} alt="Avatar" onClick={approveQR}/> 
            : <PersonFill size={"30px"}/>

}

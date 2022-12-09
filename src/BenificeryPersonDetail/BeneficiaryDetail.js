import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import UserItem from '../User-Item/UserItem';
import { PersonFill } from 'react-bootstrap-icons';
import './style.scss';
import axios from "axios";
import { Link } from 'react-router-dom';
import {DisplayQRCode} from './DisplayQRCode';



export function BeneficiaryDetail() {
    const [status, setStatus] = useState('NOT_APPROVED')
    const [names, setNames] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const baseURL = "http://10.57.15.202:9001/register";

    const onSubmit = (item) => {
        setNames(names => [...names, item])
        const body = {
            ...item,
            "primary_owner": "9206255525",
        }
        console.log(body);

        axios.post(baseURL, body).then((response) => {
            console.log(response.data);
        });
        reset();
    }

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data.data);
            setNames([...response.data.data])
        })
    }, []);

    const isClicked = ()=>{
        axios.get(baseURL).then((response) => {
            console.log(response.data.data);
            setNames([...response.data.data])
        })
    }


    return (
        <div className='History'>
            <div className='AddBenificiaryForm'>
                <div>
                    <div className='label'>UPI LITE Add Beneficiary</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input className="form-control" placeholder='Phone number' {...register("phone_number")} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder='Txn-limit' {...register("max_limit")} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder='Per-txn-limit' {...register("regular_limit")} />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder='Description' {...register("description")} />
                        </div>
                        <button type="submit">Add Beneficiary</button>
                    </form>
                </div>
            </div>

            <div className="User-List">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">PhoneNo</th>
                            <th scope="col">Txn-per-limit</th>
                            <th scope="col">Total-Limit</th>
                            <th scope="col">Beneficiary Name</th>
                            <th scope="col">Approval Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            names && <>
                                {
                                    names.map((item, index) => {
                                        return <tr>
                                            <td scope="row" onClick={isClicked}>
                                                <DisplayQRCode phone_number={item.phone_number}/>
                                            </td>
                                            <td><Link to={`/child?id=${item.phone_number}`}>{item.phone_number}</Link></td>
                                            <td>{item.regular_limit}</td>
                                            <td>{item.max_limit}</td>
                                            <td>{item.description}</td>
                                            <td>{item.verification_status ? item.verification_status : "IN_PROGRESS" }</td>
                                            <td><div style={{ marginRight: '1rem' }}>
                                                <div className="form-check form-switch form-check-reverse active-switch">
                                                    {item.is_active &&
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                    }
                                                    {!item.is_active &&
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                    }
                                                </div>
                                            </div></td>

                                        </tr>
                                    })
                                } </>
                        }
                    </tbody>
                </table></div>
        </div>
    );

}

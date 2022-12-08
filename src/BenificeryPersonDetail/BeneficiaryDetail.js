import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import UserItem from '../User-Item/UserItem';
import { PersonFill } from 'react-bootstrap-icons';
import './style.scss';
import axios from "axios";


export function BeneficiaryDetail() {
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


    return (
        <div className='History'>
            <div className='AddBenificiaryForm'>
                <div>
                    <div className='label'>Add Beneficiary</div>
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
                <table class="table table-striped">
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
                                            <th scope="row"><div className='image_cicle'>
                                                <PersonFill size={"30px"} />
                                            </div></th>
                                            <td>{item.phone_number}</td>
                                            <td>{item.regular_limit}</td>
                                            <td>{item.max_limit}</td>
                                            <td>{item.description}</td>
                                            <td>{item.verification_status}</td>
                                            <td><div style={{ marginRight: '1rem' }}>
                                                <div class="form-check form-switch form-check-reverse active-switch">
                                                    {item.is_active &&
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                    }
                                                    {!item.is_active &&
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                    }
                                                </div>
                                            </div></td>

                                        </tr>
                                    })
                                } </>
                        }

                    </tbody>
                </table></div>
            {/* <div className="User-List sticky-top">
                {names && <div class="row">
                    <div class="col-2">
                        <div className='Name'>
                            <label>Profile</label>
                        </div>
                    </div>
                    <div class="col-2">
                        <div className='Txn-Limit'>
                            <label>PhoneNo</label>
                        </div>
                    </div>

                    <div class="col-2">
                        <div className='Per-Txn-Limit'>
                            <label>Txn-per-limit</label>
                        </div>
                    </div>
                    <div class="col-2">
                        <div className='Name'>
                            <label>Total-Limit</label>
                        </div>
                    </div>
                    <div class="col-2">
                        <div className='Txn-Limit'>
                            <label>Beneficiary Name</label>
                        </div>
                    </div>
                    <div class="col-2">
                        <div className='Txn-Limit'>
                            <label>Approval Status</label>
                        </div>
                    </div>

                    <div class="form-check form-switch form-check-reverse active-switch">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Active</label>
                    </div>

                </div>
                }
                <div className='added-user-list'>
                    {
                        names && <ul className="price">
                            {
                                names.map((item, index) => <UserItem id={index} UserItem={item} />)
                            } </ul>
                    }
                </div>
            </div> */}
        </div>
    );

}

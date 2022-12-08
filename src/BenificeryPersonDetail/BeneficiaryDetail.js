import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import UserItem from '../User-Item/UserItem';
import './style.scss';
import axios from "axios";

export function BeneficiaryDetail() {
    const [names, setNames] = useState([]);
    const { register, handleSubmit,reset } = useForm();
    const baseURL = "http://10.57.15.202:9001/register";

    const onSubmit = (item) => {
        setNames(names => [...names, item])
        const body = {
            ...item,
            "primary_owner": "9206255525",
        }
        console.log(body);

        axios.post(baseURL,body).then((response) => {
          console.log(response.data);
        });
        reset();
    }

    React.useEffect(() => {
        axios.get(baseURL).then((response)=>{
            console.log(response.data.data);
            setNames([...response.data.data])
        })
      }, []);


    return (
        <div className='History'>
            <legend>Add Benificery</legend>

            <form className='container' onSubmit={handleSubmit(onSubmit)}>
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

            <div className="User-List sticky-top">
                { names && <div class="row g-2">
                    <div class="col-3">
                        <div className='Name'>
                            <label>Name</label>
                        </div>
                    </div>
                    <div class="col-3">
                        <div className='Txn-Limit'>
                            <label>Txn-limit</label>
                        </div>
                    </div>

                    <div class="col-3">
                        <div className='Per-Txn-Limit'>
                            <label>Per-Txn-limit</label>
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
            </div>
        </div>
    );

}

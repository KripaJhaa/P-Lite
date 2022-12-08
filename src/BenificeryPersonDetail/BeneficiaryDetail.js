import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import UserItem from '../User-Item/UserItem';
import './style.scss';

export function BeneficiaryDetail() {
    const [names, setNames] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = (item) => {
        setNames(names => [...names, item])
    }


    return (
        <div className='History'>
            <legend>Add Benificery</legend>

            <form className='container' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input className="form-control" placeholder='Name' {...register("phone_number")} />
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder='Txn-limit' {...register("txn_limit")} />
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder='Per-txn-limit' {...register("per_txn_limit")} />
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder='Description' {...register("description")} />
                </div>
                <button type="submit">Add Beneficiary</button>
            </form>

            <div className="User-List">
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

                {
                    names && <ul className="price">
                    {
                        names.map((item, index) => <UserItem id={index} UserItem={item} />)
                    } </ul>
                }
            </div>
        </div>
    );

}

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
            {console.log(names)}
            <div className="User-List">
                { names && <h1>Name</h1>
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

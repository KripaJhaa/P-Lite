import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import './style.scss'

export default function UserItem({ UserItem }) {
    const { phone_number, max_limit, description, is_active, verification_status, regular_limit, qr_code } = UserItem;
    return (
        <div className='box'>
            <div className='left-side'>
                <div className='image_cicle'>
                    <PersonFill size={"50px"} />
                </div>
            </div>
            <div className='right-side'>

                <div className="container Name-details text-center">

                    <div className="row">
                        <div className="col-2">
                            <div className='Phone_no'>
                                <div className='PhoneNo'>{phone_number}</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className='Regular-Limit'>
                                <div className='limit'>{regular_limit}</div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className='Max-Limit'>
                                <div className='limt'>{max_limit}</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className='Description'>
                                <div className='description'>{description}</div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className='verification_status'>
                                <div className='verification_status'>{verification_status}</div>
                            </div>
                        </div>
                        <div>
                            <div className="form-check form-switch form-check-reverse active-switch">
                                {is_active &&
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                }
                                {!is_active &&
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

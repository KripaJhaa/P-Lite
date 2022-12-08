import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import './style.scss'

export default function UserItem({UserItem}) {
    const {phone_number,max_limit,description,is_active,verification_status,regular_limit,qr_code} = UserItem;
  return (
    <div className='box'>
        <div className='left-side'>
            <div className='image_cicle'>
            <PersonFill/>
            </div>
        </div>
        <div className='right-side'>
               
            <div class="container Name-details text-center">

                <div class="row g-2">
                <div class="col-3">
                    <div className='Name'>
                        <div className='name'>{phone_number}</div>
                    </div>
                </div>
                <div class="col-3">
                    <div className='Txn-Limit'>
                        <div className='name'>{regular_limit}</div>
                    </div>
                </div>

                <div class="col-3">
                    <div className='Per-Txn-Limit'>
                        <div className='name'>{max_limit}</div>
                    </div>
                </div>
                <div class="form-check form-switch form-check-reverse active-switch">
                    {is_active &&
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                    }
                    {!is_active &&
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    }
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

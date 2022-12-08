import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import './style.scss'

export default function UserItem({UserItem}) {
    const {name} = UserItem;
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
                        <div className='name'>{name}</div>
                    </div>
                </div>
                <div class="col-3">
                    <div className='Txn-Limit'>
                        <div className='name'>{1200}</div>
                    </div>
                </div>

                <div class="col-3">
                    <div className='Per-Txn-Limit'>
                        <div className='name'>{200}</div>
                    </div>
                </div>
                <div class="form-check form-switch form-check-reverse active-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse"/>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

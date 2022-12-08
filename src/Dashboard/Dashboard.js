import React, { Component } from 'react'
import { BeneficiaryDetail } from '../BenificeryPersonDetail/BeneficiaryDetail';
import History from '../History/History';
import './Dashboard.scss';
import { PieChart } from './PieChart';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='Scrappy-ui'>
        <legend>Dashboard</legend>

        <div className='Beneficiary-History'>
            <BeneficiaryDetail/>
        </div>

        <legend>Expense-Summary</legend>

        <div className='Summary'>
            <div className='Expense-chart'>
                <legend>Distribution</legend>
                <PieChart/>
            </div>
            <div className='Transaction-History'>
            <legend>Transaction History</legend>
                <History/>
            </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { CashStack } from 'react-bootstrap-icons';
import { BeneficiaryDetail } from '../BenificeryPersonDetail/BeneficiaryDetail';
import History from '../History/History';
import './Dashboard.scss';
import { PieChart } from './PieChart';
import banner from '../banner.png'

export default class Dashboard extends Component {
  render() {
    return (
      <div className='Scrappy-ui'>
        <Nav />
        <div className='Beneficiary-History'>
          <BeneficiaryDetail />
        </div>

        <h4>Expense-Summary</h4>
        <div className='Summary'>
          <div className='Transaction-History'>
            <legend>Transaction History</legend>
            <History />
          </div>
          <div className='Expense-chart'>
            <legend>Distribution</legend>
            <PieChart />
          </div>
        </div>
        <img className='banner-image' src={banner} />
      </div>
    )
  }
}

function Nav() {

  return (<nav className='nav-bar'>
    <div className='left'> <CashStack /> <span>PhonePe</span></div>
    <div>Notifications</div>
    <div>Project name</div>
  </nav>)
}
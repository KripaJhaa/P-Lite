import React, {Component} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Food/Groceries', 'Movies', 'Travel', 'Investments', 'Misslenes'],
    datasets: [
      {
        label: '# of Transactions',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


export default class SpendAnalysis extends Component {
    render(){
        return <div  style={{"width": "25%"}}>
            <h2  style={{"text-align": "center", "padding": "10px"}}>Spend Analysis</h2>
        {/* <PieChart style={{"width": "30%"}}/> */}
        <Pie  style={{"width": "30%"}} width={"10px"} height={"10px"}
  data={data} />;
        </div>
    }
}

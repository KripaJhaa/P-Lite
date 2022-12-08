import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

export default class RecentTx extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const transactionData = this.props.transactions
        return (
            <div style={{"display": "flex", "flex-direction": "column","width": "40%"}}>
            
            <h2 style={{"margin-bottom": "25px", "text-align": "center", "padding": "10px" }}>Recent Transactions</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{"textAlign": "center"}}>#</th>
                  <th style={{"textAlign": "center"}}>Date</th>
                  <th style={{"textAlign": "center"}}>To</th>
                  <th style={{"textAlign": "center"}}>Amount</th>
                  <th style={{"textAlign": "center"}}>Tag</th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((tx, idx) => {
                    const corr_idx = idx + 1
                    const tagColors = ["info", "success", "warning"]
                    const random = Math.floor(Math.random() * tagColors.length);   
                    return (<tr key={idx} style={{"textAlign": "center"}}>
                    <td>{corr_idx}</td>
                    <td>{tx.date}</td>
                    <td>{tx.to}</td>
                    <td>{tx.amount}</td>
                    <td><Badge pill bg={tagColors[random]}>{tx.tag}</Badge></td>
                  </tr>)
                })}

                {/* <tr style={{"textAlign": "center"}}>
                  <td>1</td>
                  <td>22-12-2022</td>
                  <td>Mr.Jerome Powell</td>
                  <td>221 ₹</td>
                  <td><Badge pill bg="primary">Misc</Badge></td>
                </tr>
                <tr style={{"textAlign": "center"}}>
                  <td>2</td>
                  <td>23-12-2022</td>
                  <td>Mr.Rob Sam</td>
                  <td>53 ₹</td>
                  <td><Badge pill bg="success">Groceries</Badge></td>
                </tr>
                <tr style={{"textAlign": "center"}}>
                  <td>3</td>
                  <td> 24-12-2022</td>
                  <td>Mr.Tony Stark</td>
                  <td>153 ₹</td>
                  <td><Badge pill bg="info" >Movies</Badge></td>
                </tr>
                <tr style={{"textAlign": "center"}}>
                  <td>4</td>
                  <td>24-12-2022</td>
                  <td>Mrs.Wanda Maximoff</td>
                  <td>77 ₹</td>
                  <td><Badge pill bg="success">Groceries</Badge></td>
                </tr> */}
              </tbody>
            </Table>
            </div>
          );
    }
}

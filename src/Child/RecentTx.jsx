import React, {Component} from 'react'
import Table from 'react-bootstrap/Table';

export default class RecentTx extends Component {
    render(){
        return (
            <div style={{"display": "flex", "flex-direction": "column","width": "40%"}}>
            
            <h2 style={{"margin-bottom": "25px", "text-align": "center" }}>Recent Transactions</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            </div>
          );
    }
}

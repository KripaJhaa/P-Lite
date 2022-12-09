import React ,{ useState }from 'react';
import './style.scss';
import axios from "axios";

export default function History() {

  const baseURL = "http://10.57.15.202:9001/transaction?primary_user=9206255525";
  const [res, setRes] = useState([]); 

  React.useEffect(() => {
    axios.get(baseURL).then((response)=>{
        setRes([...response.data.data])
        console.log(response.data.data);
    })
  }, []);

  return (
    <div className="History-list">
      {res && <ul className="list-group list-group-horizontal">
        <li className="list-group-item">User</li>
        <li className="list-group-item">Status</li>
        <li className="list-group-item">UPI Id</li>
        <li className="list-group-item">Amount</li>
        <li className="list-group-item">Time</li>
      </ul>
      }
      
      {res.map((item)=> <ul className="list-group list-group-horizontal">
        <li className="list-group-item">{item.user_id}</li>
        <li className="list-group-item">{item.status}</li>
        <li className="list-group-item">{item.merchant_upi_id}</li>
        <li className="list-group-item">{item.transaction_amount}</li>
        <li className="list-group-item">{item.created_at}</li>
        </ul>)
      }
    </div>
  )
}

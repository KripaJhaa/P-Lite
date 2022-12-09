import React ,{ useState, useEffect, useRef }from 'react';
import './style.scss';
import axios from "axios";

export const useInterval = (callback, delay) => {

    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

export default function History() {

  const baseURL = "http://10.57.15.202:9001/transaction?user_id=9206255529";
  const [res, setRes] = useState([]); 

useInterval(() => {
    axios.get(baseURL).then(response => {
            setRes([...response.data.data])
            console.log('History data',response.data.data);
        })
  }, 1000 * 10);

  return (
    <div className="History-list">
      {res && <ul className="list-group header list-group-horizontal">
        <li className="list-group-item">User</li>
        <li className="list-group-item">Status</li>
        <li className="list-group-item">UPI_Id</li>
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

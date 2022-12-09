import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Child from './Child/Child'
import Parent from './Parent/Parent'
import {NotificationContainer, NotificationManager} from 'react-notifications';
// import 'react-notifications/lib/no'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
//   const [ParentNotification, setParentNotification] = useState(false)
//   const [childNotification, setChildNotification] = useState(false)
  const createNotification = (type, amount) => {
    console.log("here", type, amount)
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info(`Deducted ${amount} from your account`);
          break;
        case 'success':
          NotificationManager.success('Deducted ${amount} from your account', 'Money Deducted');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Approval for money is denied', `Cannot deduct ${amount}`, 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  const notify = () => toast("Wow so easy!");

  return (
    <Router>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        {/* {notify()} */}
        <Routes>
          <Route exact path="/" element={<Dashboard createNotification={createNotification} />}/>
          <Route exact path="/child" element={<Child dependentChild createNotification={createNotification} notify={notify}/>}/>
          <Route exact path="/parent" element={<Child/>}/>
        </Routes>
    </Router>
  );
}


export default App;

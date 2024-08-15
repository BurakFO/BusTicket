import { useEffect, useState } from 'react'
import './App.css'
import axios, { isCancel, AxiosError } from 'axios';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';



const App = () => {

  const [customers, setCustomers] = useState([]);

  //   useEffect(() => {
  //     const response = axios.get('http://10.127.20.37:8080/api/customers')
  //         .then(response => {
  //             console.log(response.data);
  //             setCustomers(...customers, response.data)
  //         })
  //         .catch(error => {
  //             console.error('Error fetching data:', error.message);
  //         });
  // }, []); // Boş bağımlılık dizisi, yalnızca bileşenin ilk renderında çalışır.


  return (
    <div>
      {/* <h1>BusTicket Platform</h1>
      {customers.map(({firstName, lastName, phoneNumber}) => (
        <div>{firstName} {lastName} {phoneNumber}</div>
      ))} */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login"/>
      </Routes>


    </div>
  )
}

export default App

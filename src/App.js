import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UserList from './compones/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



function App() {
  const [user, setUser] = useState(null)
  // console.log(user)
  useEffect(() => {
    const getUser = async () =>{
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(res.data)
        console.log(res);
      } catch (error){
        console.log(error)
      };
    }
    getUser()
   
  //   const getData=()=>
  //   fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response=>response.json()).then(data=>setList(data)).catch(error=>console.log(error))
  // getData()
  },[])
  return (
    <div className="App">
      <UserList users={user}/>
    </div>
  );
}

export default App;

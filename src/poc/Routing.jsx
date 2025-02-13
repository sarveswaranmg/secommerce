import React from "react";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useParams,
  Outlet,
  Link,
  Navigate,
} from "react-router-dom";
function Routing() {
  return (
    <>
      <div>Navbar</div>
      <ul>
        
      </ul>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}>
          {/* subrouting */}
          <Route path="company" element={<Company></Company>}></Route>
          <Route path="ceo" element={<Ceo></Ceo>}></Route>
        </Route>
        {/* dynamic routing */}
        <Route path="/user/:id" element={<User></User>}></Route>
        {/* redirect5 to another path */}
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        {/* default routing */}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}





// function Company() {
//   return (
//     <>
//       <h1>Company</h1>
//       <h2>We never lay off</h2>
//       {/* <Outlet></Outlet> */}
//     </>
//   );
// }

// function Ceo() {
//   return (
//     <>
//       <h1>Ceo</h1>
//       <h2>Best ceo</h2>
//       {/* <Outlet></Outlet> */}
//     </>
//   );
// }

function User() {
  //   const paramsObj = useParams();
  //   console.log(paramsObj);
  const [users, setUsers] = useState(null);
  const { id, name } = useParams();
  useEffect(() => {
    async function getUsers() {
      let resp = await fetch(`https://fakestoreapi.com/users/${id}`);
      let data = await resp.json();
      console.log(data);
      setUsers(data);
    }
    getUsers();
  }, []);
  return (
    <>
      {users == null ? (
        <h1>...Loadings</h1>
      ) : (
        <>
          <div>I am User {id}</div>
          <li>
            {users.name.firstname}
            {users.name.lastname}
          </li>
          <li>{users.phone}</li>
        </>
      )}
    </>
  );
}



export default Routing;

import * as React from "react";
import { useEffect, useState } from "react";

function AppVer() {
  const [count, setCount] = useState(0);
  const [userInfo, setUserinfo] = useState("");

  //case 1: run at every render (rare)
  // useEffect(()=>{
  //     alert("Update");
  // })
  //case 2: run only once (at first time)
  useEffect(() => {
    // alert("Update");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if(response.ok){
            return response.json();
        }
        //response is not ok
        throw Error('Server Erorr, Maybe denies access!');
      })
      .then((json) =>setUserinfo(json))
      .catch((err) => console.log(err))
  }, []);

  //case 3: run at first
//   const myObject = JSON.parse(userInfo);
  console.log(userInfo);
  return (
    <div>
      {/* <h3>Count = {count}</h3>
      <button onClick={() => setCount(count + 1)}>increase</button> */}
      <h5>{userInfo['name']}</h5>
      
    </div>
  );
}

export default AppVer;

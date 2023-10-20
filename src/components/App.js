
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => response)
    .then(data => setData(data.data))
  }, [])
  console.log(data)
  return (
    <div>
      {
        data && data.map((data,i) => (
          <div key={i}>
            <h2>{data.title}</h2>
            <p>{data.body }</p>
          </div>
        ))
      }
    </div>
  )
}

export default App

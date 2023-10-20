
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
      <ol>
      {
        data && data.map((data,i) => (
          <li key={i}>
            <h2>{data.title}</h2>
            <p>{data.body }</p>
          </li>
        ))
        }
      </ol>
    </div>
  )
}

export default App

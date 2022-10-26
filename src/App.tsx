import React from "react"
import "./App.css"

export default function App() {

  const [loading, setLoading] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  const handleClick = (api: string) => {
    setLoading(true);
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setMsg(json.msg);
      })
  }

    return (
      <p>
        <button onClick={()=>handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
}
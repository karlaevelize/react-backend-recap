import axios from "axios"
import { useState } from "react"

export default function LoginPage(props){

  const [ user, setUser ] = useState()
  const [ email, setEmail] = useState("")
  const [ password, setPassword ] = useState("")

  //function to submit the form
  const handleSubmit = (event) => {
    event.preventDefault()
    login()
  }

  //function to login
  const login = async () => {
    //a post request always takes a body
    //check the backend to see the expected body
    const response = await axios.post("https://coda-backend-challenge.herokuapp.com/auth/login", {
      email, password
    })
    setUser(response.data)
    //passing the user object as props
    props.setUser(response.data)
  }

  return (
    <div>
      {/* if there's a user, we show "Welcome, user" */}
      {user && <p>Welcome, <b>{user.name}</b></p>}
      <form onSubmit={handleSubmit}>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {/* once the user is logged in, we hide the button */}
        {!user && <button type="submit">Submit</button>}
      </form>
    </div>
  )
}
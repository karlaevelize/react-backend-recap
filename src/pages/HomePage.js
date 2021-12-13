import axios from "axios"
import { useEffect } from "react"
import { useState } from "react/cjs/react.development"

export default function HomePage(props){

  //check if we are getting the user object
  console.log("user from home", props.user)

  const [ players, setPlayers ] = useState()

  const getPlayers = async () => {
    const response = await axios.get("https://coda-backend-challenge.herokuapp.com/players", {
      //we send headers because it's an authorized request
      headers: {
        Authorization: `Bearer ${props.user?.token}`
      },
    })
    setPlayers(response.data)
  }

  useEffect(() => {
    getPlayers()
  }, [])

  if (!props.user){
    return <h2>Login to see the players</h2>
  }

  return (
    <div>
      <h3>Players List</h3>
      {! players 
        ? "Loading"
        : players.map(player => {
          return (
            <div>
              <h4>{player.name}</h4>
              <img 
                style={{width: 200}}
                src={player.profilePicture}
              />
            </div>
          )
        })}
    </div>
  )
}
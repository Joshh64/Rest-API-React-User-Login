import {writeCookie} from "../common/index"

export const loginUser = async (username, password, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // tells our rest api that the body of this request will be in a JSON format
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
        console.log(data.token) // set the cookie with the value as the token received in the response. the response is from our rest API
        writeCookie("jwt_token", data.token, 7)
        newUser(data.user)
        
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (username, email, password) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "username": username,
          "email": email,
          "password": password
        }),
      })

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  export const readUsers = async () => {
    try {
      const response = await fetch (`${process.env.REACT_APP_REST_API_URL}readUsers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      
      const usernames = data.users.map(users => users.username)
      console.log(usernames)

      return usernames

    } catch (error) {
      console.log(error)
    }
  }

  export const authCheck = async (cookie) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}authCheck`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : cookie
        },
      })

      const data = await response.json()
      console.log(data)
      return data.user.username

    } catch (error) {
      console.log(error)
    }
  }

  export const deleteUser = async (username) => {
    try {
      const response = await fetch (`${process.env.REACT_APP_REST_API_URL}deleteUser`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username
        }),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
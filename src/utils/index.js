export const loginUser = async (username, password, newUser) => {
    try {
        const response = await fetch("http://localhost:5002/users/login", {
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
        newUser(data.user)
        
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (username, email, password, newUser) => {
    try {
      const response = await fetch("http://localhost:5002/users/register", {
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
      const response = await fetch ("http://localhost:5002/users/readUsers", {
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
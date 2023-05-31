import React from "react"
import {useState, useEffect} from "react"
import {readUsers} from "../utils"

const ReadUsers = () => {

    const [usernames, setUsernames] = useState()
    
    useEffect(() => {
        loadUsers()
    }, []) // when the component renders, run the code inside the useEffect hook

    const loadUsers = async () => {
        let users = await readUsers()
        console.log(users)
        setUsernames(users)
    }

    return (
        <div className="container">
            {
                usernames?.length > 0
            ?(
                <div className="usernames">
                    {
                        usernames.map((user) => (
                            <h3 key={user}>{user}</h3>
                        ))
                    }
                </div>
            ):(
                <h3>No users found</h3>
            )   
            }
        </div>
    )
}

export default ReadUsers
import React from "react"

export default function App() {

    const aboutMe = {
        firstName: 'Zakaria', 
        lastName: 'Jaddad', 
        age: 20
    }

    function greeting({ firstName, lastName }) {
        /* 
        returns gretting to user by getting
            - firstName
            - lastName
            */

        return (
            <div>
                <ul className="
                    px-4 
                    list-none
                ">
                    <li> { firstName } </li>
                    <li> { lastName } </li>
                </ul>
            </div>
        )

    }
    
    return (
        <div>
            <h1>Hello to you, My Name is : </h1>
            { greeting(aboutMe) }
        </div>
    )
}



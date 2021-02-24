import React from 'react';
import { useState, useEffect } from 'react';



export default function Home() {

    const [entriesList, setEntriesList] = useState(null)
    const [newWebsite, setNewWebsite] = useState(null)
    const [newUser, setNewUser] = useState(null)
    const [newPass, setNewPass] = useState(null)

    useEffect(() => {
        const entriesList = [
            { website: 'google.com', user: 'batista', pass: '1234' },
            { website: 'facebook.com', user: 'dota', pass: '4321' },
            { website: 'twitter.com', user: 'ladomelhor', pass: '2143' },
        ]

        setEntriesList(entriesList)
    }, [])

    function AddEntry(event) {
        // alert('adicionou')
        event.preventDefault();
        console.log('alo')
        const newEntry = { website: newWebsite, user: newUser, pass: newPass }
        setEntriesList([...entriesList, newEntry]);

    }

    function DeleteEntry(index) {
        let newList = entriesList
        newList.splice(index, 1)
        console.log(newList)
        setEntriesList([...newList])

    }

    function newFieldWebsite(event) {
        setNewWebsite(event.target.value)
    }

    function newFieldUser(event) {
        setNewUser(event.target.value)
    }

    function newFieldPass(event) {
        setNewPass(event.target.value)
    }
    console.log("EntriesList -> ", entriesList)

    return (
        <div>
            <form onSubmit={AddEntry}>
                <label>
                    <input type="text" placeholder="Website" onChange={newFieldWebsite} />
                </label>
                <label>
                    <input type="text" placeholder="Username" onChange={newFieldUser} />
                </label>
                <label>
                    <input type="text" placeholder="Password" onChange={newFieldPass} />
                </label>

                <input type="submit" value="Submit" />
            </form>
            {
                entriesList && entriesList.map((cur, index) => {

                    return (
                        <div>
                            <hr />
                            <h4> URL: </h4><p>{cur.website}</p>
                            <h4> User: </h4><p>{cur.user}</p>
                            <h4> Password: </h4><p>{cur.pass}</p>
                            <button onClick={() => DeleteEntry(index)}>Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
            {/* <button onClick={() => DeleteAll()}>DELETE ALL</button> */}
        </div>
    )
}

// const subjects = [{ code: "CMSC 100" }, { code: "CMSC 23" }];

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Subjects() {
    // we want after loading from the page, we already fetched the data from the internet
    //useEffects, upon loading of component, we can fetch agad the data from the internet or the database, it allows you to specify side effects upon rendering itself (fetch data, save data, call data)
    //something is happening as the component renders

    //upon loading we use the get objects to get all the objects
    const [subjects, setSubjects] = useState([]);
    const [greeting, setGreeting] = useState('');

    //call back is the one to be implemented
    useEffect(() => {
        //needle code 
        //api inside use effect
        fetch('http://localhost:3001/get-subjects')
            .then(response => response.json()) //parses the data we get from the response to json
            .then(body => {
                setSubjects(body) //sets the subjects form the data we got from the database
            })

        fetch('http://localhost:3001/greet-by-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'Stephen' })
        })
        .then(response => response.text())
        .then(body => {setGreeting(body)})


        //url parameters for ends points
    }, [])
    //theres a list so that it will only run once, after it gets the data, it will stop to listen

    return (
        <>
        <h1>{greeting}</h1>
            <ol>
                {/* {subjects.map((subject, index) => <li key={index}> {subject.code}</li>)} */}
                {subjects.map((subject, index) => <li key={index}>  <Link to={`/subjects/${subject.code}`}>{subject.code}</Link></li>)}
            </ol>
        </>
    )
}
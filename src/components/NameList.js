import React from 'react'
import Person from './Person';


function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Clark',
            age: 30
        },
        {
            id: 2,
            name: 'Vlad',
            age: 20
        },
        {
            id: 3,
            name: 'Dan',
            age: 33
        }
    ];

    const personList = persons.map(person => <Person key={person.id} person={person}/>)
  return (
    <div className='personListContainer'>
        <ul>{personList}</ul>
    </div>
  )
}

export default NameList
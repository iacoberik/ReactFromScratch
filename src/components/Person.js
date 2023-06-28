import React from 'react'

function Person({person}) {
  return (
    <li>Hello {person.name} and I am {person.age} years old.</li>
  )
}

export default Person
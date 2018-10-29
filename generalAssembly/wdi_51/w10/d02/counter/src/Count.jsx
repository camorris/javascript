import React from 'react'

//stateless functional components
//are functions that render 

const Count = (props) => {
  console.log(props)
  return (
    <h1>{props.number}</h1>
  )
}

export default Count
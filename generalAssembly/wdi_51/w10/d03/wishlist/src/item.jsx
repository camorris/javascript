import React from 'react'

const Item = (props) => {
  // const item = props.item
  const {item, onRemoveClick} = props
  return (
    <li> 
        {item.title}
           <button onClick={() => {onRemoveClick(item._id)}}>Remove</button>
         </li>
         
  

  )
}

export default Item
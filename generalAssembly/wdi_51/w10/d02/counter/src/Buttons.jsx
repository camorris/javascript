import React from 'react'

const Buttons = (props) => {
  
    return (
    <div>
      <button onClick={props.onMinusClick}>Minus</button>
      <button onClick={props.onPlusClick}>Plus</button>
    </div>
  
    )
}

export default Buttons
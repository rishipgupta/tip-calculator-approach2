import React from 'react'

const Output = ({ tip1, tip2, billValue }) => {
  const tipFinal = Math.round(billValue * ((tip1 + tip2) / 200))

  return (
    <div>
      <h1>Your total bill amount is {billValue + tipFinal}$ and tip is  {tipFinal}$</h1>
    </div>
  )
}

export default Output

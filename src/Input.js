import React from 'react'

const Input = ({ billValue, handleBillValue }) => {
  return (
    <div>
      <label>Bill Amount : </label>
      <input type="text" placeholder='Enter Bill Amount' value={billValue} onChange={(e) => handleBillValue(Number(e.target.value))} />
    </div>
  )
}

export default Input

import React from 'react'

const Percentage = ({ handlePercentage, children }) => {
  return (
    <div>
      <span>{children}</span>
      <select onChange={(e) => { handlePercentage(Number(e.target.value)) }}>
        <option value={0}>Not Good (0%)</option>
        <option value={5}>Good (5%)</option>
        <option value={10}>Very Good (10%)</option>
        <option value={20}>Excellent (20%)</option>
      </select>
    </div>
  )
}

export default Percentage

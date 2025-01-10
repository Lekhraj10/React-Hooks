import React from 'react'

const Header = () => {
    console.log("Rendered");
    
  return (
    <div>
      <h1>Header Display</h1>
    </div>
  )
}

export default React.memo(Header)

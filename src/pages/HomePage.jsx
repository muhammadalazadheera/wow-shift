import React from 'react'

function HomePage() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
        <img src="https://picsum.photos/300/300?random" alt="Random Unsplash" style={{ marginBottom: '20px', width: '300px', height: '300px' }} />
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple home page layout.</p>
      </div>
    </div>
  )
}

export default HomePage
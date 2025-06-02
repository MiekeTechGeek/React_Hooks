// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Learn React Hooks</h1>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';

// Simple Button Component
const SimpleButton = ({ text = "Click Me", color = "blue" }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: isClicked ? 'green' : color,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px'
      }}
    >
      {isClicked ? '✓ Clicked!' : text}
    </button>
  );
};

// Simple Card Component
const SimpleCard = ({ title = "My Card", message = "Hello World!" }) => {
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      maxWidth: '300px'
    }}>
      <h3 style={{ color: '#333', marginTop: '0' }}>{title}</h3>
      <p style={{ color: '#666' }}>{message}</p>
      
      <div style={{ marginTop: '15px' }}>
        <button
          onClick={addLike}
          style={{
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 15px',
            cursor: 'pointer'
          }}
        >
          ❤️ Like ({likes})
        </button>
      </div>
    </div>
  );
};

// Counter Component
const SimpleCounter = ({ startNumber = 0 }) => {
  const [count, setCount] = useState(startNumber);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(startNumber);

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
      backgroundColor: 'white'
    }}>
      <h2 style={{ color: '#444' }}>Counter: {count}</h2>
      
      <div>
        <button onClick={decrease} style={buttonStyle}>-</button>
        <button onClick={reset} style={{...buttonStyle, backgroundColor: '#orange'}}>Reset</button>
        <button onClick={increase} style={buttonStyle}>+</button>
      </div>
    </div>
  );
};

// Button style (reusable)
const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 15px',
  margin: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};

// Main App Component (This shows everything)
const App = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        My Simple React Components
      </h1>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '20px'
      }}>
        
        {/* Simple Buttons */}
        <div>
          <h3>Simple Buttons:</h3>
          <SimpleButton text="Blue Button" color="blue" />
          <SimpleButton text="Red Button" color="red" />
          <SimpleButton text="Purple Button" color="purple" />
        </div>

        {/* Simple Cards */}
        <div>
          <h3>Simple Cards:</h3>
          <SimpleCard 
            title="Welcome Card" 
            message="This is my first React component!" 
          />
          <SimpleCard 
            title="Learning Card" 
            message="React hooks are awesome!" 
          />
        </div>

        {/* Counter */}
        <div>
          <h3>Simple Counter:</h3>
          <SimpleCounter startNumber={0} />
          <SimpleCounter startNumber={10} />
        </div>

      </div>
    </div>
  );
};

export default App;
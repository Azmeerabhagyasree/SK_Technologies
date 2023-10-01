import React from 'react';

const Home = () => {
  const backgroundImageUrl = 'url("wood.jpg")';
  const containerStyle = {
    background: backgroundImageUrl,
    backgroundSize: 'cover', // You can adjust the background properties as needed
    width: '100vw',
    height: '100vh',
  };
  
  const applyButtonStyle = {
    padding: '10px 20px', // Adjust the padding as needed
    backgroundColor: 'green', // Customize the button background color
    color: 'white', // Customize the button text color
    border: 'none',
    borderRadius: '5px', // Add rounded corners to the button
    fontSize: '16px', // Customize the font size
    cursor: 'pointer', // Add a pointer cursor on hover
  };

  return (
    <div style={containerStyle}>
      <section className="home" id="home">
        <div className="content">
          <h3>S_K technologies</h3>
          <p>Sk technologies is a social media platform where a student can find all the sources of technologies under one roof such as HTML, CSS, JAVASCRIPT, JAVA, C#, and also the job opportunities</p>
          <button 
            style={applyButtonStyle} 
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSclK5w18YOlWAlJ7b5maQQNJYe_kdxWOpHZ5kZrTjZzXarg6g/viewform", "_blank", "noopener noreferrer")}
          >
            Apply
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

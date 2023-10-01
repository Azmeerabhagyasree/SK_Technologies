import React from 'react';

const Visitors = () => {
  const backgroundImageUrl = 'url("wood.jpg")';
  const containerStyle = {
    background: backgroundImageUrl,
    backgroundSize: 'cover', // You can adjust the background properties as needed
    width: '100vw',
    height: '100vh',
  };

  const buttonStyle = {
    padding: '10px 20px', // Adjust the padding as needed
    backgroundColor: 'green', // Customize the button background color
    color: 'white', // Customize the button text color
    border: 'none',
    borderRadius: '5px', // Add rounded corners to the button
    fontSize: '16px', // Customize the font size
    cursor: 'pointer', // Add a pointer cursor on hover
    textDecoration: 'none', // Remove underlines from the button text
    display: 'inline-block', // Display the button as inline-block
  };

  return (
    <div style={containerStyle}>
      <section className="visitors" id="visitors">
        <div className="content">
          <h3>Visit Our Instagram Page</h3>
          <p>Discover exciting job opportunities and enriching courses on our Instagram page! 🌟 Dive into a world of career possibilities and educational insights by following us today. Stay updated with the latest job openings and gain access to valuable resources that can propel your career forward. Don't miss out on this incredible journey towards personal and professional growth. Join us on Instagram now and embark on a path to success! 💼📚 #Jobs #Courses #CareerOpportunities #InstagramPage</p>
          <button
            style={buttonStyle}
            onClick={() => window.open("https://instagram.com/s__k__technologies?utm_source=qr&igshid=OGU0MmVlOWVjOQ==", "_blank", "noopener noreferrer")}
          >
            Click Here
          </button>
        </div>
      </section>
    </div>
  );
};

export default Visitors;

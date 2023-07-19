import React from "react";

function About({ blogLogo, aboutText }) {
    const placeholderImage =
      "https://via.placeholder.com/215";
    const logoAltText = "blog logo";
  
    return (
      <aside>
        <img src={blogLogo || placeholderImage} alt={logoAltText} />
        <p>{aboutText}</p>
      </aside>
    );
  }
  export default About;
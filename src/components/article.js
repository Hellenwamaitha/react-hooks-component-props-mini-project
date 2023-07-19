import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";

  // Function to calculate the emoji based on the minutes
  const calculateEmoji = (minutes) => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return "☕️".repeat(coffeeCups);
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return "🍱".repeat(bentoBoxes);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <p>{calculateEmoji(Math.ceil(preview.length / 4))} {preview.length} min read</p>
    </article>
  );
}
export {Article};
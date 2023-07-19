import React from "react";
import blogData from "../data/blog";
import {About} from "./About";
import {Header} from "./Header";
import {Article} from "./Article";
import {ArticleList} from "./articleList";

console.log(blogData);

function App() {
  
  const blogName = "My Blog";
  const aboutText = "Welcome to my blog! This is a place where I share my thoughts and insights.";
  const articles = [
    {
      id: 1,
      title: "npm audit:Broken by Design",
      date: "July 7, 2021",
      preview: "Learn the basics of React and how to build interactive user interfaces.",
    },
    {
      id: 2,
      title: "Before you memo()",
      date: "February 23, 2021",
      preview: "Explore Redux and how it can help manage the state of your React applications.",
    },
    {
      id: 2,
      title: "The Wet Codebase",
      date: "July 13, 2021",
      preview: "Explore Redux and how it can help manage the state of your React applications.", 
    },
    {
      id: 2,
      title: "Goodbye,clean code",
      date: "January 11, 2021",
      preview: "Explore Redux and how it can help manage the state of your React applications.", 
    },
    {
      id: 2,
      title: "My Decade in Review",
      date: "January 1,2020",
      preview: "Explore Redux and how it can help manage the state of your React applications.",  
    },
    {
      id: 2,
      title: "What Are the React Team Principles?",
      date: "December 25, 2019",
      preview: "Explore Redux and how it can help manage the state of your React applications.", 
    },
    {
      id: 2,
      title: "Before you memo()",
      date: "February 23, 2021",
      preview: "Explore Redux and how it can help manage the state of your React applications.",
    }
  ];

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About aboutText={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;

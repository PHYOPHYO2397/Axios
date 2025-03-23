import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IoHome } from "react-icons/io5";

// function App() {
//   return (
//     <>
//       <IoHome /> <p>Test</p>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   // Get all comments details with GET method
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments/", {
  //       params: {
  //         _limit: 10,
  //       },
  //     })
  //     .then((response) => setComments(response.data));
  // }, []);

  useEffect(() => {
    // Get the comment with ID 1
    axios
      .get("https://jsonplaceholder.typicode.com/comments/1")
      .then((response) => setComments([response.data]));
  }, []);

  return (
    <>
      {comments.map((comment, index) => {
        return (
          <p key={index}>
            {comment.name} - <i> {comment.email}</i>
          </p>
        );
      })}
    </>
  );
};
export default App;

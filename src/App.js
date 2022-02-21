import React from "react";
import "./styles/App.css";
import Main from "./container/Main";
import { Toaster } from "react-hot-toast";
// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <Main />
    </div>
  );
};

export default App;

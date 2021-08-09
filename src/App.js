import logo from './logo.svg';
import React, { useEffect, useState, Component } from 'react';
import "./App.css";
import Download from "./Downloader/Download";
import Privacy from "./Downloader/Privacy";
import Terms from "./Downloader/Terms";
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = "Inside Download Page";
  }, [])

  return (
    <React.Fragment>
      <Route exact path="/" component={Download} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
    </React.Fragment>
  );
}

export default App;

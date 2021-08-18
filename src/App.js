import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';

function App() {
  return (

    <Router>
      <div className="App">
        {/* <Header /> */}
        <Hero />

      <Route path="/" exact ><Redirect to="/post/:slug" /></Route>
      <Route path="/post" exact ><Redirect to="/post/:slug" /></Route>
        <Route path="/contact-us"  component={ContactUS}/>
        <Route path="/post/:slug" component={Post} />

        
      </div>
    </Router>
    
  );
}

export default App;

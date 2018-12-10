import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home';
import FruitBasket from './playgrounds/coding/FruitBasket';
import ContactForm from './playgrounds/debugging/ContactForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/coding" exact component={() => <FruitBasket specialFruits={['banana', 'orange']} />} />
          <Route path="/debugging" exact component={() => <ContactForm />} />
        </div>
      </Router>
    );
  }
}

export default App;

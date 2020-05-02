import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export class App extends Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        // * handle success
        let { data } = response;
        let { slip } = data;
        let { advice } = slip;

        console.log(advice);

        this.setState({ advice });
      })
      .catch((error) => {
        // * handle error
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'> {advice} </h1>
          <a className='button' href='https://mistervaibhav.github.io/react-random-advice-app'>
            Give me an advice
          </a>
        </div>
      </div>
    );
  }
}

export default App;

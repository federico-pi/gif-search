import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  } 

  componentDidMount() {
    fetch('1Iif22NnuSxZ9E0dMDd2lH6UEwB2P3fb')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ gifs: responseData.data });
      })
      .catch(error => {
        console.log('Error fetching and passing data', error)
      });
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}

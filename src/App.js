import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  } 

  componentDidMount() {
    // axios.get('1Iif22NnuSxZ9E0dMDd2lH6UEwB2P3fb')
    this.performSearch();
  }

  performSearch = (query = 'meme') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=30&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}

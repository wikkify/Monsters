import React from 'react';

import './App.css';
import { CardList } from './Components/CardListing/CardList';
import { Searchbox } from './Components/Search/searchbox';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json().then(
        data => this.setState({ monsters: data })
      ))
  }
  handleChange =(e)=> {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox
          placeholder='search Monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />



      </div>
    );
  }
}
export default App;

import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((results) => results.json())
      .then( (users) => 
            this.setState(
              () => {
                return { 'monsters': users };
              }
            )
      )
      //*/ 
  }
   
  onSearchChange = (event) => {
 
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
          return { searchField }
        }
      )
  }

  render() {

      const { monsters, searchField } = this.state;
      const { onSearchChange } = this;
      
      const filteredList = monsters.filter( (monster) => monster.name.toLocaleLowerCase().includes(searchField));

      return (
        <div className='App'>
        <input className='search-box' type='search' placeholder='Search monsters' onChange={onSearchChange}/>
        {
          filteredList.map( (monster) => {
              return (
                <div key={monster.id}> 
                  <h1>{monster.name}</h1>
                </div>
              );
            })
        }
        </div>
        );
  }
}

export default App;

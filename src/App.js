import { useState, useEffect } from 'react';

import './App.css';
import CardList from './card-list/card-list.component.jsx';
import SearchBox from './search-box/search-box.component.jsx';

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredList, setFilteredList] = useState(monsters)

  const onSearchChange = (event) => {
    const searchFieldString  = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString)
  }
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((results) => results.json())
    .then( (users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredList = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField))
    setFilteredList(newFilteredList)
  }, [searchField, monsters])

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rollodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters' className='monsters-search-box'/>
      <CardList monsters={filteredList} />
    </div>
  )
}

export default App;

import React, { useState , useEffect} from 'react'
import axios from "axios"
import Header from './components/Header'
import Character from './components/Character'
import Search from './components/Search'
import './App.css';
// import { assertExpressionStatement } from '@babel/types';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
const fetchItems = async () => {
  const result = await axios(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${query}`);
  
  // console.log(result.data);

  setItems(result.data);
  setIsLoading(false);
}

fetchItems();
}, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Character isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;

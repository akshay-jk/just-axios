import React, { useState, useEffect } from 'react';
import axios from 'axios';

import InputBox from './components/InputBox';
import ResultBox from './components/ResultBox';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState(0);

  useEffect(() => {
    if (search) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${search}`)
        .then(res => {
          setSearchResults(prevValue => [res.data]);
        }).catch(err => {
          console.log(err);
        })
    }
    else {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          setSearchResults(prevValue => [...res.data]);
        }).catch(err => {
          console.log(err);
        })
    }
  }, [search]);
  const userTyped = (event) => {
    if (!isNaN(event.target.value) && event.target.value <= 10) {
      setSearch(event.target.value);
    }
  }

  return (
    <div>
      <h1>Just Axios</h1>
      <section>
        <InputBox searchKey={userTyped} />
        {searchResults && searchResults.map(i => <ResultBox key={i.id} userData={i} />)}
      </section>
    </div>
  );
}

export default App;

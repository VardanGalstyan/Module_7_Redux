import './App.css';
import NavBarTop from './components/NavBarTop';
import Tables from './components/Tables';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FavoriteList from './components/FavoriteList';

function App() {
  const [data, setData] = useState([])
  const [skip, setSkip] = useState("0")
  const [searchValue, setSearchValue] = useState(null)
  const [favoriteJob, setFavoriteJob] = useState([])
  const [categoryValue, setCategoryValue] = useState('')
  const endpoint = searchValue
    ? `https://strive-jobs-api.herokuapp.com/jobs?title=${searchValue}&limit=10&offset=${skip}`
    : categoryValue
      ? `https://strive-jobs-api.herokuapp.com/jobs?category=${categoryValue}&limit=10&offset=${skip}`
      : `https://strive-jobs-api.herokuapp.com/jobs?limit=10&offset=${skip} `

  const fetchData = async () => {
    const response = await fetch(endpoint)
    const datas = await response.json()
    const data = datas.data
    setData(data)
    console.log(data.length);

  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, searchValue, categoryValue])

  return (
    <Router>
      <NavBarTop setSearch={(value) => setSearchValue(value)} />
      <Route path='/' exact render={() =>
        <Tables
          data={data}
          setSkip={(value) => setSkip(value)}
          setCategoryValue={(value) => setCategoryValue(value)}
          setFavoriteJob={(value) => setFavoriteJob(value)}
          favoriteJob={favoriteJob}
          skipValue={skip}
        />}
      />
      <Route path='/favorites' exact render={(routerProps) => <FavoriteList {...routerProps} jobs={favoriteJob} />} />
    </Router>
  );
}

export default App;

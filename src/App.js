import './App.css';
import NavBarTop from './components/NavBarTop';
import Tables from './components/Tables';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FavoriteList from './components/FavoriteList';
import { connect } from 'react-redux';
import { fillDataBaseAction } from './redux/job/jobActions';

const mapStateToProps = state => ({
  jobs: state.dataBase.stock.data
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fillDataBaseAction()),

})

function App({jobs, fetchData}) {
  const [favoriteJob, setFavoriteJob] = useState([])
  const [skip, setSkip] = useState("0")
  const [searchValue, setSearchValue] = useState(null)
  const [categoryValue, setCategoryValue] = useState('')
  // const endpoint = searchValue
  //   ? `https://strive-jobs-api.herokuapp.com/jobs?title=${searchValue}&limit=10&offset=${skip}`
  //   :  categoryValue
  //   ? `https://strive-jobs-api.herokuapp.com/jobs?category=${categoryValue}&limit=10&offset=${skip}`
  //   : `https://strive-jobs-api.herokuapp.com/jobs?limit=10&offset=${skip} `


  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, searchValue, categoryValue])

  return (
    <Router>
      <NavBarTop setSearch={(value) => setSearchValue(value)} />
      <Route path='/' exact render={() =>
        <Tables
          data={jobs}
          setSkip={(value) => setSkip(value)}
          setCategoryValue={(value) => setCategoryValue(value)}
          setFavoriteJob={(value) => setFavoriteJob(value)}
          favoriteJob={favoriteJob}
          skipValue={skip}
        />}
      />
      <Route path='/favorites' exact render={(routerProps) => <FavoriteList {...routerProps} jobs={jobs} />} />
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

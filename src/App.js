import './App.css';
import NavBarTop from './components/NavBarTop';
import Tables from './components/Tables';
import FavoriteList from './components/FavoriteList';
import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { fillDataBaseAction } from './redux/job/jobActions';

const mapStateToProps = state => ({
  jobs: state.dataBase.stock.data,
  skip: state.offset.skip,
  value: state.category.value,
  input: state.searchValue.input
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fillDataBaseAction()),

})

function App({ fetchData, skip, value, input }) {


  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, value, input])

  return (
    <Router>
      <NavBarTop/>
      <Route path='/' exact render={() => <Tables/>}/>
      <Route path='/favorites' exact render={() => <FavoriteList/>} />
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

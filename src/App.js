import './App.css';
import NavBarTop from './components/NavBarTop';
import FavoriteList from './components/FavoriteList';
import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fillDataBaseAction } from './redux/actions';
import JobRow from './components/jobs/JobRow';
import Jambotron from './components/jambotron/Jambotron';
import Offset from './components/Offset/Offset';


function App() {

  const skip = useSelector(state => state.offset.skip)
  const value = useSelector(state => state.category.value)
  const input = useSelector(state => state.searchValue.input)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fillDataBaseAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, value, input])

  return (
    <Router>
      <NavBarTop />
      <Jambotron />
      <Route path='/' exact render={() => <JobRow />} />
      <Offset />
      <Route path='/favorites' exact render={() => <FavoriteList />} />
    </Router>
  );
}

export default App;

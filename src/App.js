import './App.css';
import NavBarTop from './components/NavBarTop';
import Tables from './components/Tables';
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])
  
  const fetchData = async () => {
    const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs', { mode: 'no-cors'})
    const data = await response.json()
    const dataSliced = data.data.slice(0, 10)
    setData(dataSliced)

  }

  useEffect(() => {
    fetchData()
    console.log(data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <NavBarTop />
      <Tables data = {data} />
    </div>
  );
}

export default App;

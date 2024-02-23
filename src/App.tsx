import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsPage from './pages/topNews'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NewsPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

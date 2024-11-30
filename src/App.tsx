import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import NotFound from './modules/NotFound/NotFound';
import Details from './modules/Details/Details';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;
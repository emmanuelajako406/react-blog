// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogDetails from './pages/BlogDetails';
import BlogLists from './pages/BlogLists';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogLists />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      <BackToTopButton />
    </Router>
    
  );
}

export default App;

// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import BlogLists from './BlogLists';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogLists />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
